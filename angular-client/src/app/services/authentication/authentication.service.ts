import { Injectable } from '@angular/core';
import {  Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private uri = environment.backendUrl;

 
 

  constructor(private http:HttpClient) { }

 
  public toLogin(_userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }


  public login(){
    return localStorage.getItem('user') !== null;
  
  }
  public logout(){
    localStorage.removeItem('ACCESS_TOKEN');
  }

  /**
   * 
   * @param login method to get User
   * @returns 
   */
  getUser(login:string) : Observable<User> {
  

    console.log(login);
    return this.http.get<User>(`${this.uri}/user/${login}`);
   

  }
}
