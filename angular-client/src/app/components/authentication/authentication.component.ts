import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { stdout } from 'process';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;

  invalidLogin = false;
  loginSuccess: boolean;


  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) {
      authService.isLoggedIn.subscribe(x => this.loginSuccess = x);
     }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [ Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  handleLogin(){
    this.authService.login(this.loginForm.get('login').value, this.loginForm.get('password').value);

    if(this.loginSuccess){
      this.invalidLogin = false;
    }
    else {
      this.invalidLogin = true;
      console.log("Login failed !");
    }
  }

}

