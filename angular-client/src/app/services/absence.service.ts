import { Absence } from './../models/absence';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  uri = environment.backendUrl;
  constructor(private _http: HttpClient) { }

  addAbsence(absence: Absence) {
    this._http.post(`${this.uri}absence`, absence, {responseType: 'text'}).subscribe((data: any) => {
      console.log(`réponse => ${data}`);
    }, (error: HttpErrorResponse) => {
      console.log(`erreur => ${error}`);
    });
  }
}
