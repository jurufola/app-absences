import { Type } from './../../models/type';
import { AbsenceService } from './../../services/absence.service';
import { Status } from './../../models/status';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Absence } from 'src/app/models/absence';
import { User } from 'src/app/models/user';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {
  createAbsenceForm: FormGroup;
  messageSuccess: string;

  constructor(private _fb: FormBuilder, private _absenceService: AbsenceService, private _flashMessagesService: FlashMessagesService, private router:Router) { }

  ngOnInit(): void {
    this.createAbsenceForm = this._fb.group({
      type: ['', Validators.required],
      dates: this._fb.group(
        {
          startDate: ['', [Validators.required/* , this.dateRangeValidator() */]],
          endDate: ['', [Validators.required, /* this.dateRangeValidator() */]],
        }, { validator: this.dateRangeValidator() }


      ),

      reason: ['', []],
      status: [Status.INITIALE]
    });

    this.createAbsenceForm.get('type').valueChanges
    .subscribe(value => {
      console.log(this);
      if(value==3) {
        /* console.log("Je suis dans le if " + value);
        console.log("this.createAbsenceForm avant " + this.createAbsenceForm);
        console.log("validator reason avant " + this.createAbsenceForm.get('reason').validator) */
        this.createAbsenceForm.controls['reason'].setValidators([Validators.required]);
        console.log("this.createAbsenceForm apres" + this.createAbsenceForm);

        console.log("validator reason après " + this.createAbsenceForm.get('reason').validator)
      } else {
        this.createAbsenceForm.controls['reason'].clearValidators();
      }
      this.createAbsenceForm.controls['reason'].updateValueAndValidity();
    }
);
  }

  createAbsence() {
    console.log(this.createAbsenceForm);
    console.log(this.createAbsenceForm.value.dates.startDate);
    console.log(this.createAbsenceForm.value.type);

    this._absenceService.addAbsence(this.createAbsenceForm);
    //this._flashMessagesService.show(this.messageSuccess, { cssClass: 'alert-success', timeout: 3000 });

  }

  private dateRangeValidator(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      let invalid = false;
      if (!this.createAbsenceForm) {
        return null;
      }
      /*const from = this.createAbsenceForm.value.dates.startDate;
      const to = this.createAbsenceForm.value.dates.endDate;*/
      const from = group.value.startDate;
      console.log(`Date de début ${from}`);
      const to = group.value.endDate;
      console.log(`Date de fin ${to}`);
      if (from && to) {
        invalid = (new Date(from).valueOf()) > (new Date(to).valueOf());
        console.log(`invalid => ${invalid}`);
        console.log(this.createAbsenceForm);
      }
      return invalid ? { invalidRange: { from, to } } : null;
      //return invalid ? { invalidRange: {value: group.value } } : null;
    };

  }
  private reasonConditionnallyValidator(controlName: string, conditionnalValue: any): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {

      if (!this.createAbsenceForm) {
        return null;
      }
      console.log('I m validating the reason');
      console.log("this.createAbsenceForm.get(controlName).value => " + this.createAbsenceForm.get(controlName).value);
      console.log("conditionnalValue => " + conditionnalValue);
      if(this.createAbsenceForm.get(controlName).value === conditionnalValue) {
        console.log(this.createAbsenceForm.get(controlName).value);
        return Validators.required;
      }
      return null;
    }
  }

  cancelAjoutAbsence(){
    this.router.navigateByUrl('/gestion-absences');
  }


}
