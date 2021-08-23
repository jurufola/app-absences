import { Status } from './../../models/status';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-vacation-request',
  templateUrl: './vacation-request.component.html',
  styleUrls: ['./vacation-request.component.css']
})
export class VacationRequestComponent implements OnInit {
  createAbsenceForm: FormGroup

  constructor(private _fb:FormBuilder) { }

  ngOnInit(): void {
    this.createAbsenceForm = this._fb.group({
      type: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      reason: ['', Validators.required],
      status: [Status.INITIAL]
    });
  }

  createAbsence(){
    console.log(this.createAbsenceForm);

  }

}
