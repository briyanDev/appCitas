import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  listCitas:any[] = [];

  agregarCita(cita:any):void{
    this.listCitas.push(cita);
    console.log(this.listCitas);
  }

  eliminarCitaList(index:number):void{
    this.listCitas.splice(index, 1);
  }
}
