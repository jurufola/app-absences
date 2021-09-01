import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-closed-days-add',
  templateUrl: './closed-days-add.component.html',
  styleUrls: ['./closed-days-add.component.css']
})
export class ClosedDaysAddComponent implements OnInit {

  angForm: FormGroup;
  constructor(private fb:FormBuilder) {
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

  ngOnInit(): void {
  }

}
