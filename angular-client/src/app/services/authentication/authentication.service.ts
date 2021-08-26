import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/models/user/user';
//import { environment } from 'src/environments/environment';
//import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;

  //private uri = "htpp://localhost:8090/authentication";

  constructor( /*private http:HttpClient*/) { }

 
  public toLogin(_userInfo: User){
    localStorage.setItem('ACCESS_TOKEN', "access_token");
  }


  public get currentUserValue(): User {
    return this.currentUserSubject.value;
}


  public login(){
    return localStorage.getItem('currentUser') !== null;
  
  }




  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
}

}
