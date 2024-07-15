import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/PersonaService/service.service';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  
  personas:Persona[] = [];
  constructor(private service:ServiceService, private router:Router){
    //this.personas = [];
  }
    

  ngOnInit(): void {
      this.service.getPersonas()
      .subscribe(data=>{
        this.personas=data;
      })
  }

  Editar(persona:Persona): void{
    alert("Llegamos a Editar persona...!!!" + persona.nombre);
    localStorage.setItem("id",persona.id_persona.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona){  
    this.service.deletePersona(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p==persona);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
} 