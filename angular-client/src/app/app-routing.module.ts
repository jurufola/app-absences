import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VacationRequestComponent } from './components/vacation-request/vacation-request.component';

const routes: Routes = [
  {path: 'demande-abscence', component: VacationRequestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
