import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { GestionAbsencesService } from './../../services/gestion-absences.service';
import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/models/absence';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-gestion-absence',
  templateUrl: './gestion-absence.component.html',
  styleUrls: ['./gestion-absence.component.css']
})
export class GestionAbsenceComponent implements OnInit {
  absences: Absence[];
  user: User;

  constructor(private gestionAbsenceService: GestionAbsencesService, private authService: AuthenticationService) { }

  ngOnInit(): void {
    //Get user from authentication service
    this.user = this.authService.currentUserValue;

    //Get all user's absences
    this.gestionAbsenceService.getAbsences(this.user.id).subscribe((data => {
      console.log(`réponse => ${data}`);
      this.absences = data;
      this.absences.forEach(absence => {
        console.log(absence);
      });
    }));
  }

}
