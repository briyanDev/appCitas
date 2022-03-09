import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrearCitaComponent } from './components/crear-cita/crear-cita.component';
import { ListCitasComponent } from './components/list-citas/list-citas.component';

@NgModule({
  declarations: [
    AppComponent,
    CrearCitaComponent,
    ListCitasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
