import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;


  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]] // least than 6 caracters
    });
    console.log(this.loginForm);
  }

  get formControls(){ return this.loginForm.controls;}

  login(){
      this.isSubmitted = true;
      if(this.loginForm.invalid){
        return;
      }

      this.authService.toLogin(this.loginForm.value); // for authentication
      this.router.navigateByUrl('/user');
  
      // display form values on success
      alert('Autentication success');
    }    
  }
 
