import { Component } from '@angular/core';
import { Persona_arriendo } from '../../Modelo/Persona_arriendo';
import { Arriendo } from '../../Modelo/Arriendo';
import { Router } from '@angular/router';
import { PersonaArriendoserviceService } from '../../Service/Persona_arriendoService/persona-arriendoservice.service';

@Component({
  selector: 'app-persona-arriendo-add',
  templateUrl: './persona-arriendo-add.component.html',
  styleUrl: './persona-arriendo-add.component.css'
})
export class PersonaArriendoAddComponent {

  persona = new Persona_arriendo();
  arriendos: Arriendo[] = [];


  constructor(private router:Router, private service:PersonaArriendoserviceService){}

  ngOnInit() {
    this.getArriendo();
  }
  
  getArriendo() {
    this.service.getArriendo().subscribe(data => {
          this.arriendos = data;
        });
  }


  Guardar(persona:Persona_arriendo){
    console.log("Nombres: " + persona.nombre)
    alert("Nombres: " + persona.nombre);
    
    this.service.createPersona_arriendo(persona)
    .subscribe(data=>{
      alert("Se agrego la persona con Exito...!!!");
      this.router.navigate(["persona-arriendo-listar"]);
    })
    
  }
}
