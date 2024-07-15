import { Component } from '@angular/core';
import { Persona_compra } from '../../Modelo/Persona_compra';
import { PersonaCompraserviceService } from '../../Service/Persona_compraService/persona-compraservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-compra-listar',
  templateUrl: './persona-compra-listar.component.html',
  styleUrl: './persona-compra-listar.component.css'
})
export class PersonaCompraListarComponent {

  personas:Persona_compra[] = [];
  
  constructor(private service:PersonaCompraserviceService, private router:Router){
    //this.personas = [];
  }
    

  ngOnInit(): void {
      this.service.getPersona_compra()
      .subscribe(data=>{
        this.personas=data;
      })
  }

  Editar(persona:Persona_compra): void{
    alert("Llegamos a Editar persona...!!!" + persona.nombre);
    localStorage.setItem("id",persona.id_persona_compra.toString());
    this.router.navigate(["edit"]);
  }

  Delete(persona:Persona_compra){  
    this.service.deletePersona_compra(persona)
    .subscribe(data=>{
      this.personas=this.personas.filter(p=>p==persona);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
