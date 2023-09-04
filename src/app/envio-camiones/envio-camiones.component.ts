import { Component } from '@angular/core';

import { FormGroup,FormControl,Validators  } from '@angular/forms';
import {ConecctionsService} from '../CONECCION_BACKEND/conecctions.service';

import Producto from '../DTO/productoDTO';
import User from '../DTO/userDTO';
import Bodega from '../DTO/bodegaDTO';
import EnvioCamiones from '../DTO/envioCamionesDTO';


@Component({
  selector: 'app-envio-camiones',
  templateUrl: './envio-camiones.component.html',
  styleUrls: ['./envio-camiones.component.css']
})
export class EnvioCamionesComponent {


  
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


public bodega : Bodega = {   
  id_bodega: 0,
  nombre_bodega: '',  
  codigo_bodega: '',
  ciudad_bodega:''
}

public envioCamiones: EnvioCamiones ={
  id_envio_camiones: 0,
  cantidad_producto: 0,
  fecha_registro: new Date,
  fecha_entrega: new Date,
  precio_envio:0,
  placa_vehiculo:'',
  numero_guia:'',
  user:this.user,
  bodega:this.bodega,
  producto_camiones: this.producto
}

public crear_envioCamion: FormGroup;

public descuento?:number=0;

constructor(
private conecctionsService:ConecctionsService
){  
this.crear_envioCamion = this.createFormGroup();  
}



createFormGroup(){
return new FormGroup({ 

  id_envio_camiones: new FormControl(),
  producto_camiones: new FormControl('',[Validators.required],),  
  cantidad_producto: new FormControl('',[Validators.required]),
  user: new FormControl('',[Validators.required],), 
  bodega: new FormControl('',[Validators.required],),
  precio_envio: new FormControl('',[Validators.required],),
  fecha_registro: new FormControl('',[Validators.required]),
  fecha_entrega: new FormControl('',[Validators.required]),
  placa_vehiculo: new FormControl('',[Validators.required],), 
  numero_guia: new FormControl('',[Validators.required],) 
 
    
})
}



save(){   
this.trasl();


{
this.conecctionsService.postCrearProducto(this.producto).subscribe({
  next:(response:any) => { 
        console.log(response)          
  },
  error: (error:any) => {
    console.log(error)
  }
});
}   
   
}

descuentoE(cantidad:any, precio:any){
  this.descuento = 0;
  if(cantidad >=10){
    this.descuento = precio-(precio/100*5)
    this.envioCamiones.precio_envio = this.descuento;
  }  
  

}



cancelar(){    
this.crear_envioCamion.reset();  

this.producto.id_producto = 0,
this.bodega.id_bodega =0,
this.user.id_user = 0,

this.envioCamiones.id_envio_camiones = 0,
this.envioCamiones.precio_envio = 0,
this.envioCamiones.fecha_registro = new Date,
this.envioCamiones.fecha_entrega =  new Date,
this.envioCamiones.placa_vehiculo = '',
this.envioCamiones.numero_guia = '',

this.envioCamiones.producto_camiones = this.producto;
this.envioCamiones.bodega = this.bodega;
this.envioCamiones.user = this.user;

}


trasl(){
this.producto.id_producto = this.crear_envioCamion.get('producto_camiones')?.value;
this.bodega.id_bodega = this.crear_envioCamion.get('bodega')?.value;
this.user.id_user = this.crear_envioCamion.get('user')?.value; 

this.envioCamiones.id_envio_camiones = this.crear_envioCamion.get('id_envio_camiones')?.value;
this.envioCamiones.precio_envio = this.crear_envioCamion.get('precio_envio')?.value;
this.envioCamiones.fecha_registro = this.crear_envioCamion.get('fecha_registro')?.value;
this.envioCamiones.fecha_entrega = this.crear_envioCamion.get('fecha_entrega')?.value;
this.envioCamiones.placa_vehiculo = this.crear_envioCamion.get('placa_vehiculo')?.value;
this.envioCamiones.numero_guia = this.crear_envioCamion.get('numero_guia')?.value;
this.envioCamiones.cantidad_producto = this.crear_envioCamion.get('cantidad_producto')?.value;


this.envioCamiones.producto_camiones = this.producto;
this.envioCamiones.bodega = this.bodega;
this.envioCamiones.user = this.user;


 
}





}
