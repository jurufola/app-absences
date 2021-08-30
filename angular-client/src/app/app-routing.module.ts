import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationGuard } from './services/guards/authentication.guard';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'authentication'}, // redirection all to th
  { path: 'authentication', component: AuthenticationComponent }, // path for authentication

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
