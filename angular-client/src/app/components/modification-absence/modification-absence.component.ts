import { AbsenceService } from './../../services/absence.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Absence, Type } from 'src/app/models/absence';

@Component({
  selector: 'app-modification-absence',
  templateUrl: './modification-absence.component.html',
  styleUrls: ['./modification-absence.component.css']
})
export class ModificationAbsenceComponent implements OnInit {
  editForm: FormGroup;
  absence: Absence = null;
  absenceEnumType = Type;

  constructor(private route: ActivatedRoute, private router: Router, private fb: FormBuilder,
    private abs: AbsenceService) {
    this.createForm();
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.abs.editAbsence(params['id']).subscribe(res => {
        this.absence = res;
        console.log('absence : ' + this.absence.dateDebut);
      })
    })
  }

  createForm(){
    this.editForm = this.fb.group({
      BeginDate: ['', Validators.required],
      EndDate: ['', Validators.required],
      AbsenceType: ['', Validators.required],
      Motive: ['', Validators.required]
    });
  }

  updateAbsence(BeginDate, EndDate, AbsenceType, Motive) {
    this.route.params.subscribe(params => {
      this.abs.updateAbsence(BeginDate, EndDate, AbsenceType, Motive, params.id).subscribe((data) => {
        this.router.navigate(['absences']);
      });
    })
  }

}
