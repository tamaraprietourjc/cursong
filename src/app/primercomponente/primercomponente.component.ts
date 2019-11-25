import { Component, OnInit } from '@angular/core';

interface Persona {
  nombre: string;
  apellidos: string;
  edad: number;
}

interface Coche {
  marca: string;
  ruedas: number;
}

export class CPersona {
  constructor(nombre: string, apellidos: string, edad: number) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.edad = edad;
  }
  nombre: string;
  apellidos: string;
  edad: number;
}

export class CCoche {
    constructor(marca: string, ruedas: number) {
      this.marca = marca;
      this.ruedas = ruedas;
}
  marca: string;
  ruedas: number;
}


@Component({
  selector: 'app-primercomponente',
  templateUrl: './primercomponente.component.html',
  styleUrls: ['./primercomponente.component.css']
})
export class PrimercomponenteComponent implements OnInit {

  variable: number;
  variableCadena: string;
  variableArray: number[];

  miVariable: number;
  miVariableCadena: string;
  miVariableArray: string[];
  miVariableTupla: [string, number][];

  variablePersona: Persona;

  variableCoche: Coche;

  variableCPersona: CPersona;
  variableCCoche: CCoche;

  constructor() {
    this.variable = 1;
    this.variableCadena = '2';
    this.variableArray = [12, 1, 5];

    this.miVariable = 7;
    this.miVariableCadena = 'Tamara';
    this.miVariableArray = ['Pepe', 'Jose'];
    this.miVariableTupla = [['Pepe', 1], ['Jose', 2]];

    this.variablePersona = {nombre: 'Tamara', apellidos: 'Prieto', edad: 30};

    this.variableCoche = {marca: 'Opel', ruedas: 4};

    this.variableCPersona = new CPersona('Tamara', 'Prieto', 31);

    this.variableCCoche = new CCoche('Audi', 3);

  }

  ngOnInit() {
  }

  verNombre() {
    return this.variableCPersona.nombre;
  }

  cambiarNombre(evento) {
    console.log(evento);
    this.variableCPersona.nombre = evento;
  }

  verApellido() {
    return this.variableCPersona.apellidos;
  }

  cambiarApellido(evento) {
    console.log(evento);
    this.variableCPersona.apellidos = evento;
  }
}
