import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AdminComponent } from './components/admin/admin.component';
import { ManagerComponent } from './components/manager/manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/user/user.component';
//import { AuthenticationService } from './services/authentication/authentication.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    AdminComponent,
    ManagerComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [/*AuthenticationService*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
