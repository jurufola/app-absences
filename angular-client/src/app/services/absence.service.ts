import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { Absence } from './../models/absence';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { FlashMessagesService } from 'flash-messages-angular';
import { FormGroup } from '@angular/forms';
import { Status } from '../models/status';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AbsenceService {
  uri = environment.backendUrl;
  constructor(private _http: HttpClient, private _flashMessagesService: FlashMessagesService, private authService: AuthenticationService) { }

  public addAbsence(myForm: FormGroup) {
    const absence = new Absence(0, (myForm.value.type),
      new Date(myForm.value.dates.startDate), new Date(myForm.value.dates.endDate),
      myForm.value.reason, Status.INITIALE, this.authService.currentUserValue);
    this._http.post(`${this.uri}/absences`, absence, { responseType: 'text' }).subscribe((data: any) => {
      console.log(`réponse => ${data}`);
      console.log("type réponse => " + typeof data);
      if (data.includes("prise en compte")) {
        this._flashMessagesService.show(data, { cssClass: 'alert-success', timeout: 5000 });
        myForm.reset();
      }else {
        this._flashMessagesService.show(data, { cssClass: 'alert-warning', timeout: 5000 });
      }



    }, (error: HttpErrorResponse) => {
      console.log(`erreur => ${error.message}`);
      this._flashMessagesService.show(error.message, { cssClass: 'alert-danger', timeout: 5000 });

    });
  }
}
