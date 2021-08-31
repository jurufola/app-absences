import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { GestionDesAbsencesComponent } from './components/gestion-absences/gestion-absences.component';
import { AppComponent } from './app.component';




@NgModule({
  declarations: [
    AppComponent,
    GestionDesAbsencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
