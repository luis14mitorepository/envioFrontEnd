import { Component } from '@angular/core';


import { FormGroup,FormControl,Validators  } from '@angular/forms';
import {ConecctionsService} from '../CONECCION_BACKEND/conecctions.service';

import Bodega from '../DTO/bodegaDTO';


@Component({
  selector: 'app-bodega',
  templateUrl: './bodega.component.html',
  styleUrls: ['./bodega.component.css']
})
export class BodegaComponent {
  
  public bodega : Bodega = {   
    id_bodega: 0,
    nombre_bodega: '',  
    codigo_bodega: '',
    ciudad_bodega:''
  }
  
public crear_bodega: FormGroup;


constructor(
  private conecctionsService:ConecctionsService
    ){  
      this.crear_bodega = this.createFormGroup();  
      }



  createFormGroup(){
    return new FormGroup({     
      id_bodega: new FormControl(),
      nombre_bodega: new FormControl('',[Validators.required]),
      codigo_bodega: new FormControl('',[Validators.required,Validators.pattern('^[A-Z ]{4,50}$')]),
      ciudad_bodega: new FormControl('',[Validators.required],)     
    })
  }
  
  

  save(){   
    this.trasl();
      {
        this.conecctionsService.postCrearBodega(this.bodega).subscribe({
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
    this.crear_bodega.reset();   
    this.bodega.id_bodega=0;
    this.bodega.nombre_bodega='';
    this.bodega.codigo_bodega='';
    this.bodega.ciudad_bodega='';
    
  }


trasl(){
    this.bodega.id_bodega = this.crear_bodega.get('id_bodega')?.value;
    this.bodega.nombre_bodega= this.crear_bodega.get('nombre_bodega')?.value;
    this.bodega.codigo_bodega= this.crear_bodega.get('codigo_bodega')?.value;
    this.bodega.ciudad_bodega== this.crear_bodega.get('ciudad_bodega')?.value;
}


}
