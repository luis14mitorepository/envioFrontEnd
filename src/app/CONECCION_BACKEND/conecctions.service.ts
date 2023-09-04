import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders, HttpParams  } from '@angular/common/http';
import { Observable } from 'rxjs';
import {CookieService} from 'ngx-cookie-service';

import User from '../DTO/userDTO';
import Puerto from '../DTO/puertoDTO';
import Bodega from '../DTO/bodegaDTO';
import Producto from '../DTO/productoDTO';
import EnvioCamiones from '../DTO/envioCamionesDTO';
import EnvioMaritimo from '../DTO/envioMaritimoDTO';


@Injectable({
  providedIn: 'root'
})
export class ConecctionsService {

 

  API_URI = 'http://localhost:8080';
  constructor(private http:HttpClient,     
     private cookieService:CookieService) { }


  getHello(){   
    return this.http.get(`${this.API_URI}/hello`);
  }


  postCrearUser(user: User) {
    return this.http.post(`${this.API_URI}/create_user`, user);
  }

  

  getUser(id: number ) {
    return this.http.get(`${this.API_URI}/get_user/${id}`);
  }

  
//*******************PUERTO************ */

postCrearPuerto(puerto: Puerto) {
  return this.http.post(`${this.API_URI}/create_puerto`, puerto);
}

//***************************Bodega************************ */


postCrearBodega(bodega: Bodega) {
  return this.http.post(`${this.API_URI}/create_bodega`, bodega);
}


//***************************PRODUCTO************************ */


postCrearProducto(producto: Producto) {
  return this.http.post(`${this.API_URI}/create_producto`, producto);
}


//***************************EnvioCamion************************ */


postCrearEnvioCamiones(envioCamiones: EnvioCamiones) {
  return this.http.post(`${this.API_URI}/create_envio_camiones`, envioCamiones);
}


}


