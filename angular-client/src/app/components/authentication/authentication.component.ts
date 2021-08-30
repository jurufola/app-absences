import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  loginForm: FormGroup;
  isSubmitted = false;
  user: User = null;


  constructor(private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      login: ['', [ Validators.required ]],
      password: ['', [Validators.required, Validators.minLength(6)]] // least than 6 caracters
    });
    console.log(this.loginForm);
  }

  get formControls(){ return this.loginForm.controls;}

  login(){

    console.log('login');
  
    if(this.checkLogin()){
     
     this.isSubmitted = true;
     this.loginForm.get('login').value;
     console.log('connection reussie');
     //this.router.navigateByUrl('/user');
      
   }else{
     this.loginForm.invalid;
     return false;
   }

      //this.authService.toLogin(this.loginForm.value); // for authentication
     
    }  

    
    checkLogin():boolean{
      console.log('login: ' + this.loginForm.get('login').value);

     this.authService.getUser(this.loginForm.get('login').value).subscribe((res:User)=>{
       this.user = res;
     });
     //console.log(this.user.login);
     if(this.user != null){
       if((this.loginForm.get('password').value).isEquals(this.user.motDePasse)){
         return true ;
       }
     }
      return false;
    }
    
  }
 
