import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tercercomponente',
  templateUrl: './tercercomponente.component.html',
  styleUrls: ['./tercercomponente.component.css']
})
export class TercercomponenteComponent implements OnInit {

  numeroPipe = 1.78978;
  dineroPipe = 879.89909;
  fechaPipe = Date.now();
  objeto = {nombre: 'Curso', asistentes: 12};
  cadenaPipe = 'Esto ES uNa CaDEna';

  constructor() { }

  ngOnInit() {
  }

}
