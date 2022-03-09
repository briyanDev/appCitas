import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.scss']
})
export class ListCitasComponent implements OnInit {


  @Input() listadoCitas: any;

  @Output() deleteCita = new EventEmitter<number>();
  constructor() { }


  ngOnInit(): void {
  }

  eliminarCita(indice:number):void{
    this.deleteCita.emit(indice);
  }
}
