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

/**
 * service to add new closedDays
 * @param Date 
 * @param Type 
 * @param Jour 
 * @param Commentaires 
 */
  addNewClosedDay(Date, Type, Jour, Commentaires){
    const closedDay  = new ClosedDay(0, Date,Type,Jour, Commentaires);

    console.log(closedDay);

    this.http.post(`${this.uri}/closed-days`, closedDay,{ responseType: 'text' }).subscribe(res => {

      console.log('Done');
      console.log(res);
    });
    

  }

  editClosedDays(arg0: any) {
    throw new Error('Method not implemented.');
  }
 
}
