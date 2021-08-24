import { Status } from './../../models/status';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, ControlContainer, FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {
  createAbsenceForm: FormGroup

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
    this.createAbsenceForm = this._fb.group({
      type: ['', Validators.required],
      dates: this._fb.group(
        {
          startDate: ['', [Validators.required/* , this.dateRangeValidator() */]],
          endDate: ['', [Validators.required, /* this.dateRangeValidator() */]],
        }, {validator: this.dateRangeValidator()}


      ),

      reason: ['', Validators.required],
      status: [Status.INITIAL]
    });
  }

  createAbsence() {
    console.log(this.createAbsenceForm);

  }

  private dateRangeValidator(): ValidatorFn {
    return (group: AbstractControl): { [key: string]: any } | null => {
      let invalid = false;
      if(!this.createAbsenceForm) {
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
        console.log(`invalid => ${invalid}`)
      }
      return invalid ? { invalidRange: { from, to } } : null;
      //return invalid ? { invalidRange: {value: group.value } } : null;
    };

  }

}
