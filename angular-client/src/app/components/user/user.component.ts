import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  constructor(private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
   
  }

/* getUser(){
    this.authService
    .getUser()
    .subscribe((data: User) =>{
      this.user = data;
    });
  }*/


  logout(){
    this.authService.logout();
    this.router.navigateByUrl('/authentication');
  }

}
