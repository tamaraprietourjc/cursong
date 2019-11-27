import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimercomponenteComponent } from './primercomponente/primercomponente.component';
import { SegundocomponenteComponent } from './segundocomponente/segundocomponente.component';
import { TercercomponenteComponent } from './tercercomponente/tercercomponente.component';
import { CuartocomponenteComponent } from './cuartocomponente/cuartocomponente.component';
import {FormsModule} from '@angular/forms';
import { ObsComponent } from './obs/obs.component';
import {MatButtonModule, MatIconModule, MatMenuModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ProbandoComponent } from './probando/probando.component';
import {UsuarioApiComponent} from './usuario-api/usuario-api.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    PrimercomponenteComponent,
    SegundocomponenteComponent,
    TercercomponenteComponent,
    CuartocomponenteComponent,
    ObsComponent,
    ProbandoComponent,
    UsuarioApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
