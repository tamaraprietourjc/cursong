import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import {Usuario} from '../Models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class ProbandoService {
  private _usuarios: Usuario[];
  private _usuarios$ = new Subject<Usuario[]>();

  constructor() {
    this._usuarios = [];
  }

  public getUsuarios() {
    //this._usuarios.push(new Usuario ('a', 'b', 'c', 'd', 5));
    return this._usuarios;
  }

  public getUsuarios$(): Observable<Usuario[]> {
    return this._usuarios$.asObservable();
  }

  public nuevoUsuario(): Usuario {
    return new Usuario(null, null, null, null, null);
  }

  public agregaUsuario(usuario: Usuario) {
    this._usuarios.push(usuario);
    this._usuarios$.next((this._usuarios));
  }
}
