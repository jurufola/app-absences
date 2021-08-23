import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  /**
   * to login for the authentication
   */
  public toLogin(_userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }

  /**
   * is login with authentication
   */
  public login(){
    return localStorage.getItem('ACCESS_TOKEN') !== null;
  }

  /**
   * to logout for the authentication
   */
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }
}
