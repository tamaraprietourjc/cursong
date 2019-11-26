import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundocomponente',
  templateUrl: './segundocomponente.component.html',
  styleUrls: ['./segundocomponente.component.css']
})
export class SegundocomponenteComponent implements OnInit {

  variableBoolena = true;
  numero = 100;
  arrayDatos: number[];



  constructor() {
    this.arrayDatos = [1, 2, 3];
  }

  ngOnInit() {
  }

}
