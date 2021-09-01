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
  loginSuccess = false;


  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [ Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  handleLogin(){
    let loginAttempt = this.authService.login(this.loginForm.get('login').value, this.loginForm.get('password').value);
    if(loginAttempt){
      this.loginSuccess = true;
      this.invalidLogin = false;
      console.log("Login sucess !");
      this.router.navigateByUrl('/home')
    }
    else {
      this.invalidLogin = true;
      this.loginSuccess = false;
      console.log("Login failed !");
    }
  }

}

