import { Component } from '@angular/core';
import { Arriendo } from '../../Modelo/Arriendo';
import { Persona_arriendo } from '../../Modelo/Persona_arriendo';
import { Router } from '@angular/router';
import { PersonaArriendoserviceService } from '../../Service/Persona_arriendoService/persona-arriendoservice.service';

@Component({
  selector: 'app-persona-arriendo-edit',
  templateUrl: './persona-arriendo-edit.component.html',
  styleUrl: './persona-arriendo-edit.component.css'
})
export class PersonaArriendoEditComponent {
  
  persona :Persona_arriendo=new Persona_arriendo();
  arriendos: Arriendo[] = [];

  constructor(private router:Router, private service:PersonaArriendoserviceService){}

  ngOnInit(){ 
    this.Editar();
    this.getArriendo();
  }

  getArriendo() {
    this.service.getArriendo().subscribe(data => {
          this.arriendos = data;
        });
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getPersona_arriendoId(id).
      subscribe(data=>{
        this.persona=data;
      })
  }

  Actualizar(persona:Persona_arriendo){
    this.service.updatePersona_arriendo(this.persona).subscribe(data=>{
      this.persona=data;
      alert("Actualizado con Exito...!!!" + this.persona.nombre);
      this.router.navigate(["persona-arriendo-listar"]);
    } )
  }
}
