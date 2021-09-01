import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClosedDaysService } from 'src/app/services/closed-days/closed-days.service';

@Component({
  selector: 'app-closed-days-add',
  templateUrl: './closed-days-add.component.html',
  styleUrls: ['./closed-days-add.component.css']
})
export class ClosedDaysAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb:FormBuilder, private as:ClosedDaysService) {
    this.createForm();
   }

   createForm(){
     this.angForm = this.fb.group({
      Date: [ '', Validators.required],
      Type: ['', Validators.required],
      Jour: ['', Validators.required],
      Commentaires: ['', Validators.required]
     });
   }

   addClosedDay(Date, Type, Jour, Commentaires){
     this.as.addNewClosedDay(Date, Type, Jour, Commentaires);
   }

   /*addClosedDay(){
     this.as.addNewClosedDay(this.angForm);
   }*/


  ngOnInit(): void {
  }

}
