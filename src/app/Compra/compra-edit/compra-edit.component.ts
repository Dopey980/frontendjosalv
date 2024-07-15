import { Component } from '@angular/core';
import { Compra } from '../../Modelo/Compra';
import { Inmueble } from '../../Modelo/Inmueble';
import { Persona_compra } from '../../Modelo/Persona_compra';
import { Router } from '@angular/router';
import { CompraServiceService } from '../../Service/CompraService/compra-service.service';

@Component({
  selector: 'app-compra-edit',
  templateUrl: './compra-edit.component.html',
  styleUrl: './compra-edit.component.css'
})
export class CompraEditComponent {

  compra = new Compra();
  inmuebles: Inmueble[] = [];
  personas: Persona_compra[] = [];


  constructor(private router:Router, private service:CompraServiceService){}

  ngOnInit() {
    this.Editar();
    this.getPersona();
    this.getInmueble();
  }

  getPersona() {
    this.service.getPersona().subscribe(data => {
          this.personas = data;
        });
  }

  getInmueble() {
    this.service.getInmueble().subscribe(data => {
          this.inmuebles = data;
        });
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getCompraId(id).
      subscribe(data=>{
        this.compra=data;
      })
  }

  Actualizar(compra:Compra){
    this.service.updateCompra(this.compra).subscribe(data=>{
      this.compra=data;
      alert("Actualizado con Exito...!!!" + this.compra.id_compra);
      this.router.navigate(["compra-listar"]);
    } )
  }
}
