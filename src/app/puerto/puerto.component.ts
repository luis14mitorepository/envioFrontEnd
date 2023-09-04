import { Component } from '@angular/core';

import { FormGroup,FormControl,Validators  } from '@angular/forms';
import {ConecctionsService} from '../CONECCION_BACKEND/conecctions.service';

import Puerto from '../DTO/puertoDTO';


@Component({
  selector: 'app-puerto',
  templateUrl: './puerto.component.html',
  styleUrls: ['./puerto.component.css']
})
export class PuertoComponent {

  public puerto : Puerto = {
    
    id_puerto: 0,  
    nombre_puerto: '',   
    codigo_puerto: '',
    ciudad_puerto: '',
  }
  public crear_puerto: FormGroup;


constructor(
  private conecctionsService:ConecctionsService
    ){  
      this.crear_puerto = this.createFormGroup();  
      }



  createFormGroup(){
    return new FormGroup({     
      id: new FormControl(),
      nombre_puerto: new FormControl('',[Validators.required]),
      codigo_puerto: new FormControl('',[Validators.required,Validators.pattern('^[A-Z ]{4,50}$')]),
      ciudad_puerto: new FormControl('',[Validators.required],)     
    })
  }
  
  

  save(){   
    this.trasl();
      {
        this.conecctionsService.postCrearPuerto(this.puerto).subscribe({
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
    this.crear_puerto.reset();     
    this.puerto.id_puerto =0;
    this.puerto.nombre_puerto= '',   
    this.puerto.codigo_puerto= '',
    this.puerto.ciudad_puerto= ''  
    
  }


trasl(){     
    this.puerto.id_puerto =this.crear_puerto.get('id')?.value;
    this.puerto.nombre_puerto=this.crear_puerto.get('nombre_puerto')?.value;
    this.puerto.codigo_puerto=this.crear_puerto.get('codigo_puerto')?.value;
    this.puerto.ciudad_puerto=this.crear_puerto.get('ciudad_puerto')?.value;
}


}
