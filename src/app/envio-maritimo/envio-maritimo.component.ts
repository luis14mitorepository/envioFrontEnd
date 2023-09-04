import { Component } from '@angular/core';


import { FormGroup,FormControl,Validators  } from '@angular/forms';
import {ConecctionsService} from '../CONECCION_BACKEND/conecctions.service';

import Producto from '../DTO/productoDTO';
import User from '../DTO/userDTO';
import Puerto from '../DTO/puertoDTO';
import EnvioMaritimo from '../DTO/envioMaritimoDTO';




@Component({
  selector: 'app-envio-maritimo',
  templateUrl: './envio-maritimo.component.html',
  styleUrls: ['./envio-maritimo.component.css']
})
export class EnvioMaritimoComponent {







  
public producto : Producto = {   
    id_producto: 0,    
    nombre_producto: '',   
    codigo_producto: '',
    descripcion_producto: ''   

}

public user : User = {
      id_user: 0,    
      email: "", 
      username: "",
      password: ""
    }


public puerto : Puerto = {       
      id_puerto: 0,    
      nombre_puerto: '',  
      codigo_puerto: '',
      ciudad_puerto: '',
}

public envioMaritimo: EnvioMaritimo ={
      id_envio_maritimo: 0,
      cantidad_producto: 0,
      fecha_registro: new Date,
      fecha_entrega: new Date,
      precio_envio:0,
      numero_flota:'',
      numero_guia:'',
      user:this.user,
      puerto:this.puerto,
      producto_maritimo: this.producto
}

public crear_envioMaritimo: FormGroup;

public precioFinal?:number=0;
public descuento?:number =0;


constructor(
private conecctionsService:ConecctionsService
){  
this.crear_envioMaritimo = this.createFormGroup();  
}



createFormGroup(){
return new FormGroup({ 

  id_envio_maritimo: new FormControl(),
  producto_maritimo: new FormControl('',[Validators.required],),  
  cantidad_producto: new FormControl('',[Validators.required]),
  user: new FormControl('',[Validators.required],), 
  puerto: new FormControl('',[Validators.required],),
  precio_envio: new FormControl('',[Validators.required],),
  fecha_registro: new FormControl('',[Validators.required]),
  fecha_entrega: new FormControl('',[Validators.required]),
  numero_flota: new FormControl('',[Validators.required],), 
  numero_guia: new FormControl('',[Validators.required],),
  descuento: new FormControl('',[Validators.required],) 
 
    
})
}



save(){   
this.trasl();

this.descuentoE()
        {
        this.conecctionsService.postCrearEnvioMaritimo(this.envioMaritimo).subscribe({
          next:(response:any) => { 
                console.log(response)          
          },
          error: (error:any) => {
            console.log(error)
          }
        });
        }   
   
}

descuentoE(){
  let precio = this.crear_envioMaritimo.get('precio_envio')?.value;
  let cantidad = this.crear_envioMaritimo.get('cantidad_producto')?.value;  
  this.precioFinal =0;
  if(cantidad >=10){
    this.descuento = precio/100*3;
    this.precioFinal = precio-this.descuento
    this.envioMaritimo.precio_envio = this.precioFinal;    
  }  

}



cancelar(){    
this.crear_envioMaritimo.reset();  

this.producto.id_producto = 0,
this.puerto.id_puerto =0,
this.user.id_user = 0,

this.envioMaritimo.id_envio_maritimo = 0,
this.envioMaritimo.precio_envio = 0,
this.envioMaritimo.fecha_registro = new Date,
this.envioMaritimo.fecha_entrega =  new Date,
this.envioMaritimo.numero_flota = '',
this.envioMaritimo.numero_guia = '',

this.envioMaritimo.producto_maritimo = this.producto;
this.envioMaritimo.puerto = this.puerto;
this.envioMaritimo.user = this.user;

}


trasl(){
this.producto.id_producto = this.crear_envioMaritimo.get('producto_maritimo')?.value;
this.puerto.id_puerto = this.crear_envioMaritimo.get('puerto')?.value;
this.user.id_user = this.crear_envioMaritimo.get('user')?.value; 

this.envioMaritimo.id_envio_maritimo = this.crear_envioMaritimo.get('id_envio_maritimo')?.value;
this.envioMaritimo.precio_envio = this.crear_envioMaritimo.get('precio_envio')?.value;
this.envioMaritimo.fecha_registro = this.crear_envioMaritimo.get('fecha_registro')?.value;
this.envioMaritimo.fecha_entrega = this.crear_envioMaritimo.get('fecha_entrega')?.value;
this.envioMaritimo.numero_flota = this.crear_envioMaritimo.get('numero_flota')?.value;
this.envioMaritimo.numero_guia = this.crear_envioMaritimo.get('numero_guia')?.value;
this.envioMaritimo.cantidad_producto = this.crear_envioMaritimo.get('cantidad_producto')?.value;


this.envioMaritimo.producto_maritimo = this.producto;
this.envioMaritimo.puerto= this.puerto;
this.envioMaritimo.user = this.user;


 
}





}
