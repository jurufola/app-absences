import { Component } from '@angular/core';
import { Role } from './models/Role';
import { User } from './models/User';
import { UserService } from './services/user.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})
export class AppComponent implements OnInit {
  title = 'vacation-app';
  users: Object

  constructor (private userService: UserService){

  }

  ngOnInit(){
    console.log('here we are!')
    this.userService.getUser().subscribe((data) => {
      this.users=data;
    })

    }
  }





