import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-crear-cita',
  templateUrl: './crear-cita.component.html',
  styleUrls: ['./crear-cita.component.scss']
})
export class CrearCitaComponent implements OnInit {
  nombre = '';
  fecha = '';
  hora = '';
  sintomas = '';
  formIsNotOk = false;

  @Output() nuevaCita = new EventEmitter<any>();
  constructor() { }


  ngOnInit(): void {
  }

  agregarCita(){
    if(this.nombre == '' || this.fecha == '' || this.hora == '' ||this.sintomas == ''){
      this.formIsNotOk = true;
      return;
    }
    this.formIsNotOk = false;

    //Crear el obj
    const cita= {
      nombre : this.nombre,
      fecha : this.fecha,
      hora : this.hora,
      sintomas : this.sintomas
    }
    this.nuevaCita.emit(cita);
    this.resetCampos();
  }
  resetCampos():void{
    this.nombre = '';
    this.fecha = '';
    this.hora = '';
    this.sintomas = '';
  }
}
