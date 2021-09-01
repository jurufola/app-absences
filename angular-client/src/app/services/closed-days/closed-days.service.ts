import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClosedDay } from 'src/app/models/closed-day';
import { User } from 'src/app/models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClosedDaysService {


  private uri = environment.backendUrl;

  constructor(private http: HttpClient) {}


 /**
  * to view all datas of the closedDays 
  * @returns closed-days 
  */
  getDatas():Observable <ClosedDay[]>  {
    
    console.log('holidays');
    return this.http.get<ClosedDay[]>(`${this.uri}/closed-days`);
  }

  /**
   * to return the role of the current user
   * @param role 
   * @returns 
   */
  getUserRole(role:User){
    console.log('userRole');
    return this.http.get<User>(`${this.uri}/user/${role}`); 
  }

  addClosedDays(Date, Type, Jour, Commentaires){

    const obj = {
      Date, Type, Jour, Commentaires
    };
    console.log(obj);
    this.http.post(`${ this.uri }`, obj).subscribe(res=> console.log('Done'));

  }

}
