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
  addNewClosedDay(Date, Type, Jour, Commentaire){
    const closedDay  = new ClosedDay(0, Date,Type,Jour, Commentaire);

    console.log(closedDay);

    this.http.post(`${this.uri}/closed-days`, closedDay,{ responseType: 'text' }).subscribe(res => {

      console.log('Done');
      console.log(res);
    });
    

  }
/**
 * 
 * @param id method to update the closedDays
 */
  editClosedDays(id) {

    return this.http.get(`${this.uri}/closed-days${id}`);
    
  }

  updateClosedDay(id,Date, Type, Jour, Commentaire){
    const closedDay = new ClosedDay(id, Date,Type,Jour, Commentaire);

    return this.http.put<ClosedDay>(`${this.uri}/${id}`, closedDay).subscribe(res => {
      console.log(res);
    }) ;
  }
 
}
