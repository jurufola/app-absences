import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClosedDay } from 'src/app/models/closed-day';
import { ClosedDaysService } from 'src/app/services/closed-days/closed-days.service';

@Component({
  selector: 'app-closed-days-edit',
  templateUrl: './closed-days-edit.component.html',
  styleUrls: ['./closed-days-edit.component.css']
})
export class ClosedDaysEditComponent implements OnInit {

  angForm: FormGroup;
  closedDay: ClosedDay;

  constructor(private route:ActivatedRoute, private router:Router, private as:ClosedDaysService , private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({

      Date: [ '', Validators.required],
      Type: ['', Validators.required],
      Jour: ['', Validators.required],
      Commentaires: ['', Validators.required]
    })
    
  }

  ngOnInit() {
   
    }

}
