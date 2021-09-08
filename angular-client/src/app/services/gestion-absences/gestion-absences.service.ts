import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Absence } from '../../models/absence';

@Injectable({
  providedIn: 'root'
})
export class GestionAbsencesService {
  private uri = environment.backendUrl;
  constructor(private http: HttpClient) { }

  getAbsences(userId: number): Observable<Absence[]> {
    return this.http.get<Absence[]>(`${this.uri}/usersAbsences/${userId}`);
  }

  deleteAbsence(id:number): Observable<Absence>{
    return this.http.delete<Absence>(`${this.uri}/absences/${id}`);
  }
}
