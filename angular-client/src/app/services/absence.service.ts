import { Absence } from './../models/absence';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  private absenceUrl: string;

  constructor(private http: HttpClient) {
    this.absenceUrl = 'http://localhost:8090/absences';
   }

   public getAbsences(): Observable<Absence[]> {
     return this.http.get<Absence[]>(this.absenceUrl);
   }

   public save(absence: Absence) {
    return this.http.post<Absence>(this.absenceUrl, absence);
  }

  public editAbsence(id): Observable<Absence> {
    return this.http.get<Absence>(`${this.absenceUrl}/${id}`);
  }

  updateAbsence(BeginDate, EndDate, AbsenceType, Motive, id): Observable<Absence> {
    const obj = {
      id,
      BeginDate,
      EndDate,
      AbsenceType,
      Motive
    };
    return this
      .http
      .put<Absence>(`${this.absenceUrl}/${id}`, obj, { responseType: 'json' });
  }
}
