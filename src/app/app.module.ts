import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {CookieService} from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import {ConecctionsService} from './CONECCION_BACKEND/conecctions.service';
import { HelloComponent } from './envios/hello/hello.component';
import { BodegaComponent } from './bodega/bodega.component';
import { EnvioCamionesComponent } from './envio-camiones/envio-camiones.component';
import { EnvioMaritimoComponent } from './envio-maritimo/envio-maritimo.component';
import { ProductoComponent } from './producto/producto.component';
import { PuertoComponent } from './puerto/puerto.component';
import { InicioComponent } from './inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HelloComponent,
    BodegaComponent,
    EnvioCamionesComponent,
    EnvioMaritimoComponent,
    ProductoComponent,
    PuertoComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,   
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CookieService
  ],
  bootstrap: [
    AppComponent,
    ConecctionsService
  
  ]
})
export class AppModule { }
