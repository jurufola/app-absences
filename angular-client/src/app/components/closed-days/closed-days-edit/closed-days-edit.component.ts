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
  closedDay: any;


  constructor(private route:ActivatedRoute, private router:Router, private as:ClosedDaysService , private fb: FormBuilder) { 
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({

      Date: [ '', Validators.required],
      Type: ['', Validators.required],
      Jour: ['', Validators.required],
      Commentaire: ['', Validators.required]
    })
    
  }

  ngOnInit() {

    this.route.params.subscribe(params =>{
      this.as.editClosedDays(params['id']).subscribe(res => {
        this.closedDay = res;
    
      });
    });
   
    }


   /**
    * Method to update closedDay
    * @param Date 
    * @param Type 
    * @param Jour 
    * @param Commentaire 
    */
   updateClosedDay(Date, Type, Jour, Commentaire){
    this.route.params.subscribe(params => {
    this.as.editClosedDays(params.id).subscribe((res) => {
      console.log('update ok');
      this.router.navigate([this.closedDay]);
    })
    });
  }

  /**
   * Method to abort the angForm
   */
 cancelAddClosedDay(){
    this.router.navigateByUrl('/closeddays');
  }

}
