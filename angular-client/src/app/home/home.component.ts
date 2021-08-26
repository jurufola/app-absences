import { Component, OnInit } from '@angular/core';
import { Role } from '../models/Role';
import { User } from '../models/User';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   role: Array<string> = new Array("user", "manager", "admin");


  constructor() { }

  ngOnInit(): void {
  }

}
