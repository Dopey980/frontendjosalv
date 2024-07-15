import { Component } from '@angular/core';
import { Persona_compra } from '../../Modelo/Persona_compra';
import { Compra } from '../../Modelo/Compra';
import { Router } from '@angular/router';
import { PersonaCompraserviceService } from '../../Service/Persona_compraService/persona-compraservice.service';

@Component({
  selector: 'app-persona-compra-edit',
  templateUrl: './persona-compra-edit.component.html',
  styleUrl: './persona-compra-edit.component.css'
})
export class PersonaCompraEditComponent {

  persona :Persona_compra=new Persona_compra();
  compras: Compra[] = [];

  constructor(private router:Router, private service:PersonaCompraserviceService){}

  ngOnInit(){ 
    this.Editar();
    this.getCompra();
  }

  getCompra() {
    this.service.getCompra().subscribe(data => {
          this.compras = data;
        });
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getPersona_compraId(id).
      subscribe(data=>{
        this.persona=data;
      })
  }

  Actualizar(persona:Persona_compra){
    this.service.updatePersona_compra(this.persona).subscribe(data=>{
      this.persona=data;
      alert("Actualizado con Exito...!!!" + this.persona.nombre);
      this.router.navigate(["persona-compra-listar"]);
    } )
  }
}
