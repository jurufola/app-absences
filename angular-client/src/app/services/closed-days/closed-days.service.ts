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


 
  getDatas():Observable <ClosedDay>  {
    
    //console.log('holidays');
    return this.http.get<ClosedDay>(`${this.uri}/closed-days/}`);
  }

  



  getClosedDays(): Observable <ClosedDay> {
    
    return this.http.get<ClosedDay>(` ${this.uri}/closed-days`);
  }

}
