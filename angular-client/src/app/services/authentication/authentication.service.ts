import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

 
  public toLogin(_userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }
  public login(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
