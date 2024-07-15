import { Component } from '@angular/core';
import { Venta } from '../../Modelo/Venta';
import { Persona_venta } from '../../Modelo/Persona_venta';
import { PersonaVentaserviceService } from '../../Service/Persona_ventaService/persona-ventaservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-persona-venta-edit',
  templateUrl: './persona-venta-edit.component.html',
  styleUrl: './persona-venta-edit.component.css'
})
export class PersonaVentaEditComponent {

  persona :Persona_venta=new Persona_venta();
  ventas: Venta[] = [];

  constructor(private router:Router, private service:PersonaVentaserviceService){}

  ngOnInit(){ 
    this.Editar();
    this.getVenta();
  }

  getVenta() {
    this.service.getVenta().subscribe(data => {
          this.ventas = data;
        });
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getPersona_ventaId(id).
      subscribe(data=>{
        this.persona=data;
      })
  }

  Actualizar(persona:Persona_venta){
    this.service.updatePersona_venta(this.persona).subscribe(data=>{
      this.persona=data;
      alert("Actualizado con Exito...!!!" + this.persona.nombre);
      this.router.navigate(["persona-venta-listar"]);
    } )
  }
}
