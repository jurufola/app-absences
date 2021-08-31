import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Absence } from './absence';

@Injectable({
  providedIn: 'root'
})
export class GestionAbsenceService {

  constructor(private http: HttpClient) { }

  getAbsences(userId: number): Observable<Absence[]> {
    return this.http.get<Absence[]>(`http://localhost:8090/usersAbsences/${userId}`);
  }
}
