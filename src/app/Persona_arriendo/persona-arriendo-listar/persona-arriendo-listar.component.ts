import { Component } from '@angular/core';
import { Persona_arriendo } from '../../Modelo/Persona_arriendo';
import { PersonaArriendoserviceService } from '../../Service/Persona_arriendoService/persona-arriendoservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-arriendo-listar',
  templateUrl: './persona-arriendo-listar.component.html',
  styleUrl: './persona-arriendo-listar.component.css'
})
export class PersonaArriendoListarComponent {
  personas:Persona_arriendo[] = [];
  constructor(private service:PersonaArriendoserviceService, private router:Router){
    //this.personas = [];
  }
    

  ngOnInit(): void {
      this.service.getPersona_arriendo()
      .subscribe(data=>{
        this.personas=data;
      })
  }

  Editar(persona:Persona_arriendo): void{
    alert("Llegamos a Editar persona...!!!" + persona.nombre);
    localStorage.setItem("id",persona.id_persona_arriendo.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona_arriendo){  
    this.service.deletePersona_arriendo(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p==persona);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
