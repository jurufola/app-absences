import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClosedDay } from 'src/app/models/closed-day';
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
    
    //console.log('holidays');
    return this.http.get<ClosedDay[]>(`${this.uri}/closed-days`);
  }

  
}
