import { Component } from '@angular/core';
import { FormGroup,FormControl,Validators  } from '@angular/forms';

import User from '../DTO/userDTO';

import {ConecctionsService} from '../CONECCION_BACKEND/conecctions.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {

  public user : User = {
    id_user: 0,    
    email: "", 
    username: "",
    password: ""
  }
  public crear_user: FormGroup;


constructor(
  private conecctionsService:ConecctionsService
    ){  
      this.crear_user = this.createFormGroup();  
      }



  createFormGroup(){
    return new FormGroup({     
      id: new FormControl(),
      email: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required,Validators.pattern('^[A-Z ]{4,50}$')]),
      password: new FormControl('',[Validators.required],)     
    })
  }

  
  

  save(){   
    this.trasl();
      {
        this.conecctionsService.postCrearUser(this.user).subscribe({
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
    this.user.email ='';
    this.user.username ='';
    this.user.password ='';
    this.user.id_user =0;
    this.crear_user.reset();   
    
    
  }


trasl(){  
  this.user.id_user = this.crear_user.get('id')?.value;
  this.user.email = this.crear_user.get('email')?.value;
  this.user.username = this.crear_user.get('nombre')?.value;
  this.user.password = this.crear_user.get('password')?.value;
}


}