import { GestionAbsenceComponent } from './components/gestion-absence/gestion-absence.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { ClosedDaysAddComponent } from './components/closed-days/closed-days-add/closed-days-add.component';
import { ClosedDaysEditComponent } from './components/closed-days/closed-days-edit/closed-days-edit.component';
import { ClosedDaysComponent } from './components/closed-days/closed-days.component';
import { HomeComponent } from './components/home/home.component';
import { AuthenticationGuard } from './guards/authentication.guard';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'authentication'}, // redirection all to th
  { path: 'authentication', component: AuthenticationComponent }, // path for authentication
  { path: 'closeddays', component: ClosedDaysComponent }, // path for closedDays
  { path: 'closeddays/add', component: ClosedDaysAddComponent }, // path for add closedDays
  { path: 'closeddays/edit/id', component: ClosedDaysEditComponent }, // path for update closedDays



  

  { path: 'home', component: HomeComponent, canActivate: [AuthenticationGuard] },
  { path: 'gestion-absences', component: GestionAbsenceComponent, canActivate: [AuthenticationGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
