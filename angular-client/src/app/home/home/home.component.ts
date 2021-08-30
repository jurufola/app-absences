import { User } from 'src/app/Role';
import { Component, OnInit } from '@angular/core';
import { Role } from 'src/app/models/Role';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  myUser="manager";
  connect=true;


  disconnect(){
    this.connect=!this.connect;
    this.myUser='';
  }



  constructor() { }

  ngOnInit(): void {



   }
  }


