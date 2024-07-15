import { Component } from '@angular/core';
import { Persona_venta } from '../../Modelo/Persona_venta';
import { PersonaVentaserviceService } from '../../Service/Persona_ventaService/persona-ventaservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-venta-listar',
  templateUrl: './persona-venta-listar.component.html',
  styleUrl: './persona-venta-listar.component.css'
})
export class PersonaVentaListarComponent {

personas:Persona_venta[] = [];
  
  constructor(private service:PersonaVentaserviceService, private router:Router){
    //this.personas = [];
  }
    

  ngOnInit(): void {
      this.service.getPersona_venta()
      .subscribe(data=>{
        this.personas=data;
      })
  }

  Editar(persona:Persona_venta): void{
    alert("Llegamos a Editar persona...!!!" + persona.nombre);
    localStorage.setItem("id",persona.id_persona_venta.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona_venta){  
    this.service.deletePersona_venta(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p==persona);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
