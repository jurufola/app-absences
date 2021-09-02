import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClosedDaysService } from 'src/app/services/closed-days/closed-days.service';

@Component({
  selector: 'app-closed-days-add',
  templateUrl: './closed-days-add.component.html',
  styleUrls: ['./closed-days-add.component.css']
})
export class ClosedDaysAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb:FormBuilder, private as:ClosedDaysService, private router:Router) {
    this.createForm();
   }

   createForm(){
     this.angForm = this.fb.group({
      Date: [ '', Validators.required],
      Type: ['', Validators.required],
      Jour: ['', Validators.required],
      Commentaire: ['', Validators.required]
     });
   }

   /**
    * Method to add new closedDay
    * @param Date 
    * @param Type 
    * @param Jour 
    * @param Commentaire 
    */
   addClosedDay(Date, Type, Jour, Commentaire){
     this.as.addNewClosedDay(Date, Type, Jour, Commentaire);
     this.router.navigateByUrl('/closeddays');
   }

   /**
    * Method to abort the angForm
    */
  cancelAddClosedDay(){
     this.router.navigateByUrl('/closeddays');
   }
   /*addClosedDay(){
     this.as.addNewClosedDay(this.angForm);
   }*/


  ngOnInit(): void {
  }

}
