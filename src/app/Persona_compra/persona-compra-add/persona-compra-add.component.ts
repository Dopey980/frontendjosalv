import { Component } from '@angular/core';
import { Persona_compra } from '../../Modelo/Persona_compra';
import { Router } from '@angular/router';
import { PersonaCompraserviceService } from '../../Service/Persona_compraService/persona-compraservice.service';
import { Compra } from '../../Modelo/Compra';

@Component({
  selector: 'app-persona-compra-add',
  templateUrl: './persona-compra-add.component.html',
  styleUrl: './persona-compra-add.component.css'
})
export class PersonaCompraAddComponent {
  
  persona = new Persona_compra();
  compras: Compra[] = [];


  constructor(private router:Router, private service:PersonaCompraserviceService){}

  ngOnInit() {
    this.getCompra();
  }
  
  getCompra() {
    this.service.getCompra().subscribe(data => {
          this.compras = data;
        });
  }


  Guardar(persona:Persona_compra){
    console.log("Nombres: " + persona.nombre)
    alert("Nombres: " + persona.nombre);
    
    this.service.createPersona_compra(persona)
    .subscribe(data=>{
      alert("Se agrego la persona con Exito...!!!");
      this.router.navigate(["persona-arriendo-listar"]);
    })
    
  }
}
