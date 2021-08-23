import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modification-absence',
  templateUrl: './modification-absence.component.html',
  styleUrls: ['./modification-absence.component.css']
})
export class ModificationAbsenceComponent implements OnInit {
  editForm: FormGroup;
  model: NgbDateStruct;
  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {

  }

  createForm(){
    this.editForm = this.fb.group({
      BeginDate: ['', Validators.required],
      EndDate: ['', Validators.required],
      AbsenceType: ['', Validators.required],
      Motive: ['', Validators.required]
    });
  }

}
