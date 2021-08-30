import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClosedDay } from 'src/app/models/closed-day';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClosedDaysService {

  uri = environment.backendUrl;

  constructor(private http: HttpClient) { }


  getClosedDays(): Observable <ClosedDay> {
    
    return this.http.get<ClosedDay> (` ${this.uri}/closeddays`);
  }


}
