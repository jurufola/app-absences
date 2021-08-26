import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user/user';
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
      email: ['', [ Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['', [Validators.required, Validators.minLength(6)]] // least than 6 caracters
    });
    console.log(this.loginForm);
  }

  get formControls(){ return this.loginForm.controls;}

  login(){
  
    if(this.checkLogin){
     
     this.isSubmitted = true;
     this.router.navigateByUrl('/home');
      // display form values on success
      alert("is Connected !");
   }

   if(this.loginForm.invalid){
      return false;
    }

      //this.authService.toLogin(this.loginForm.value); // for authentication
     
    }  

    checkLogin():boolean{

     this.authService.getUser(this.loginForm.get('email').value).subscribe((res:User)=>{
       this.user = res;
     });
     if(this.user != null){
       if(this.loginForm.get('password').value === this.user.password){
         return true ;
       }
     }
      return false;
    }
    
  }
 
