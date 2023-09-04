import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import {UserComponent}  from './user/user.component';
import { PuertoComponent } from './puerto/puerto.component';
import { BodegaComponent } from './bodega/bodega.component';
import { ProductoComponent } from './producto/producto.component';
import { EnvioCamionesComponent } from './envio-camiones/envio-camiones.component';
import { EnvioMaritimoComponent } from './envio-maritimo/envio-maritimo.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:'user',
    pathMatch:'full'
  },
  {
    path:'user',
    component: UserComponent
  },
  {
    path:'producto',
    component: ProductoComponent
  }
  ,
  {
    path:'puerto',
    component: PuertoComponent
  }
  ,
  {
    path:'bodega',
    component: BodegaComponent
  }
  ,
  {
    path:'envio_camiones',
    component: EnvioCamionesComponent
  }
  ,
  {
    path:'envio-maritimo',
    component: EnvioMaritimoComponent
  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
