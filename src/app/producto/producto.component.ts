import { Component } from '@angular/core';

import { FormGroup,FormControl,Validators  } from '@angular/forms';
import {ConecctionsService} from '../CONECCION_BACKEND/conecctions.service';

import Producto from '../DTO/productoDTO';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {

  public producto : Producto = {   
            id_producto: 0,    
            nombre_producto: '',   
            codigo_producto: '',
            descripcion_producto: ''   

  }
  
public crear_producto: FormGroup;


constructor(
  private conecctionsService:ConecctionsService
    ){  
      this.crear_producto = this.createFormGroup();  
      }



  createFormGroup(){
    return new FormGroup({ 
      id_producto: new FormControl(),
      nombre_producto: new FormControl('',[Validators.required]),
      codigo_producto: new FormControl('',[Validators.required,Validators.pattern('^[A-Z ]{4,50}$')]),
      descripcion_producto: new FormControl('',[Validators.required],)     
    })
  }
  
  

  save(){   
    this.trasl();
      {
        this.conecctionsService.postCrearProducto(this.producto).subscribe({
          next:(response:any) => { 
                console.log(response)
                this.cancelar();          
          },
          error: (error:any) => {
            console.log(error)
          }
        });
      }   
           
    }



cancelar(){    
    this.crear_producto.reset();  

    this.producto.id_producto=0;
    this.producto.codigo_producto='';
    this.producto.descripcion_producto='',
    this.producto.nombre_producto='';
  
  }


trasl(){
  this.producto.id_producto=this.crear_producto.get('id_producto')?.value;
    this.producto.codigo_producto=this.crear_producto.get('codigo_producto')?.value;
    this.producto.descripcion_producto=this.crear_producto.get('descripcion_producto')?.value;
    this.producto.nombre_producto=this.crear_producto.get('nombre_producto')?.value;
}


}
