import { FlashMessagesModule } from 'flash-messages-angular';
import { GestionAbsencesService } from './services/gestion-absences/gestion-absences.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationRequestComponent } from './components/vacation-request/vacation-request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbsenceService } from './services/absence/absence.service';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ClosedDaysComponent } from './components/closed-days/closed-days.component';
import { HomeComponent } from './components/home/home.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { ClosedDaysAddComponent } from './components/closed-days/closed-days-add/closed-days-add.component';
import { ClosedDaysEditComponent } from './components/closed-days/closed-days-edit/closed-days-edit.component';
import { ClosedDaysDeleteComponent } from './components/closed-days/closed-days-delete/closed-days-delete.component';
import { GestionAbsenceComponent } from './components/gestion-absence/gestion-absence.component';

@NgModule({
  declarations: [
    AppComponent,
    VacationRequestComponent,
    AuthenticationComponent,
    ClosedDaysComponent,
    HomeComponent,
    NavmenuComponent,
    ClosedDaysAddComponent,
    ClosedDaysEditComponent,
    ClosedDaysDeleteComponent,
    GestionAbsenceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlashMessagesModule.forRoot(),
    AppRoutingModule
  ],
  providers: [AuthenticationService, GestionAbsencesService, AbsenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
