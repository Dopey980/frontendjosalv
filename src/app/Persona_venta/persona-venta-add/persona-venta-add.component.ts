import { Component } from '@angular/core';
import { Persona_venta } from '../../Modelo/Persona_venta';
import { PersonaVentaserviceService } from '../../Service/Persona_ventaService/persona-ventaservice.service';
import { Router } from '@angular/router';
import { Venta } from '../../Modelo/Venta';

@Component({
  selector: 'app-persona-venta-add',
  templateUrl: './persona-venta-add.component.html',
  styleUrl: './persona-venta-add.component.css'
})
export class PersonaVentaAddComponent {

  persona = new Persona_venta();
  ventas: Venta[] = [];


  constructor(private router:Router, private service:PersonaVentaserviceService){}

  ngOnInit() {
    this.getVenta();
  }
  
  getVenta() {
    this.service.getVenta().subscribe(data => {
          this.ventas = data;
        });
  }


  Guardar(persona:Persona_venta){
    console.log("Nombres: " + persona.nombre)
    alert("Nombres: " + persona.nombre);
    
    this.service.createPersona_venta(persona)
    .subscribe(data=>{
      alert("Se agrego la persona con Exito...!!!");
      this.router.navigate(["persona-venta-listar"]);
    })
    
  }  
}
