import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClosedDay } from 'src/app/models/closed-day';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClosedDaysService {

<<<<<<< HEAD
  private uri = environment.backendUrl;

  constructor(private http: HttpClient) {}


 
  getDatas():Observable <ClosedDay>  {
    
    //console.log('holidays');
    return this.http.get<ClosedDay>(`${this.uri}/closed-days/}`);
  }

  


  
=======
  uri = environment.backendUrl;

  constructor(private http: HttpClient) { }


  getClosedDays(): Observable <ClosedDay> {
    
    return this.http.get<ClosedDay> (` ${this.uri}/closed-days`);
  }


>>>>>>> enyon-closed-days
}
