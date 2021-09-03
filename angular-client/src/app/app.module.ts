import { GestionAbsencesService } from './services/gestion-absences.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClosedDaysComponent } from './components/closed-days/closed-days.component';
import { HomeComponent } from './components/home/home.component';
import { NavmenuComponent } from './components/navmenu/navmenu.component';
import { AuthenticationService } from './services/authentication/authentication.service';
import { ClosedDaysAddComponent } from './components/closed-days/closed-days-add/closed-days-add.component';
import { ClosedDaysEditComponent } from './components/closed-days/closed-days-edit/closed-days-edit.component';
import { GestionAbsenceComponent } from './components/gestion-absence/gestion-absence.component';
import { ClosedDaysService } from './services/closed-days/closed-days.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    ClosedDaysComponent,
    HomeComponent,
    NavmenuComponent,
    ClosedDaysAddComponent,
    ClosedDaysEditComponent,
    GestionAbsenceComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AuthenticationService, GestionAbsencesService, ClosedDaysService],
  bootstrap: [AppComponent]
})
export class AppModule { }
