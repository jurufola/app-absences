import { GestionAbsencesService } from './services/gestion-absences.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VacationRequestComponent } from './components/vacation-request/vacation-request.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AbsenceService } from './services/absence.service';
import { FlashMessagesModule } from 'flash-messages-angular';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClosedDaysComponent } from './components/closed-days/closed-days.component';
import { HomeComponent } from './components/home/home.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { GestionAbsenceComponent } from './components/gestion-absence/gestion-absence.component';

@NgModule({
  declarations: [
    AppComponent,
    VacationRequestComponent,
    AuthenticationComponent,
    ClosedDaysComponent,
    HomeComponent,
    NavmenuComponent,
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
  providers: [AuthenticationService, GestionAbsencesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
