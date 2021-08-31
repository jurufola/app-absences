import { User } from '../../models/user';
import { Absence } from 'src/app/services/absence';
import { GestionAbsenceService } from '../../services/gestion-absence.service';
import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role';

@Component({
  selector: 'app-gestion-absences',
  templateUrl: './gestion-absences.component.html',
  styleUrls: ['./gestion-absences.component.css']
})
export class GestionDesAbsencesComponent implements OnInit {
  absences: Absence[];
  user: User = new User(1, 'jdoe', 'doe123', 'Doe', 'John', 22, 6, new Role(1, 'Employee'));
  constructor(private gAS: GestionAbsenceService) { }

  ngOnInit(): void {
    this.gAS.getAbsences(this.user.id).subscribe((data => {
      console.log(`réponse => ${data}`);
      this.absences = data;
      this.absences.forEach(absence => {
        console.log(absence);
      });
    }));
  }
}
