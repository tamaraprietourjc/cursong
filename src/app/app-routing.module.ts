import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PrimercomponenteComponent} from './primercomponente/primercomponente.component';
import {SegundocomponenteComponent} from './segundocomponente/segundocomponente.component';
import {TercercomponenteComponent} from './tercercomponente/tercercomponente.component';
import {CuartocomponenteComponent} from './cuartocomponente/cuartocomponente.component';
import {ObsComponent} from './obs/obs.component';
import {ProbandoComponent} from './probando/probando.component';
import {UsuarioApiComponent} from './usuario-api/usuario-api.component';


const routes: Routes = [
  {path: 'primero', component: PrimercomponenteComponent},
  {path: 'segundo', component: SegundocomponenteComponent},
  {path: 'tercero', component: TercercomponenteComponent},
  {path: 'cuarto', component: CuartocomponenteComponent},
  {path: 'obs', component: ObsComponent},
  {path: 'probando', component: ProbandoComponent},
  {path: 'usuario-api', component: UsuarioApiComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
