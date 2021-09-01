import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import {  BehaviorSubject, Observable, throwError } from 'rxjs';
import { User } from 'src/app/models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  private uri = environment.backendUrl;

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  private isLoggedInSubject: BehaviorSubject<boolean>;
  public isLoggedIn: Observable<boolean>;

  constructor(private http:HttpClient, private router: Router) {
      // Init currentUser Subject/Observable
      this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();

      // Init isLoggedIn Subject/Observable
      this.isLoggedInSubject = new BehaviorSubject<boolean>(false);
      this.isLoggedIn = this.isLoggedInSubject.asObservable();
  }

  /** Use this to access current logged in user from outside */
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  public get isLoggedValue(): boolean {
    return this.isLoggedInSubject.value;
  }

  /**
   * Try to log user with given credential and if succed return true and store user infos to local storage
   * @param username
   * @param password
   * @returns
   */
  public login(username: string, password: string){
    let result = false;
    // We get the user in database corresponding to this username and this password
    this.getUserFromDB(username, password).subscribe((user)=>{
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      this.isLoggedInSubject.next(true);
      console.log("Login sucess !");
      this.router.navigateByUrl('/home')
    }, (error:any) => {
      this.isLoggedInSubject.next(false);
    });
  }

  /** Disconnect the current logged user and redirect to authentication page */
  public logout(){
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.isLoggedInSubject.next(null);
    this.router.navigateByUrl('/authentication')

  }

  /**
   * Perform http GET request on spring backend to get a database user from given login/password
   * @param login
   * @param password
   * @returns
   */
  private getUserFromDB(login:string, password:string) : Observable<User> {
    return this.http.get<User>(`${this.uri}/user/${login}/${password}`);
  }


}
