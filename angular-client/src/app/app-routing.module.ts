import { GestionDesAbsencesComponent } from './components/gestion-absences/gestion-absences.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'gestion_des_absences', component: GestionDesAbsencesComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
