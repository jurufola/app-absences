import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private uri = environment.backendUrl;

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
