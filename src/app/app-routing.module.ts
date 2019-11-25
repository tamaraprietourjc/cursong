import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrimercomponenteComponent} from './primercomponente/primercomponente.component';
import {SegundocomponenteComponent} from './segundocomponente/segundocomponente.component';
import {TercercomponenteComponent} from './tercercomponente/tercercomponente.component';
import {CuartocomponenteComponent} from './cuartocomponente/cuartocomponente.component';


const routes: Routes = [
  {path: 'primero', component: PrimercomponenteComponent},
  {path: 'segundo', component: SegundocomponenteComponent},
  {path: 'tercero', component: TercercomponenteComponent},
  {path: 'cuarto', component: CuartocomponenteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
