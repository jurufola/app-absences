import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/Role';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myUser: User;;
  connect=true;
  myRole: Role;
  role='manager';


  myIdAndMyRole(){
    let name= this.myUser.nom;
    let firstName= this.myUser.prenom;
    let role= this.myRole;
    this.role=this.myRole.nomRole


      }

  disconnect(){
    this.connect=!this.connect;

  }

  ngOnInit(): void {



   }
  }


