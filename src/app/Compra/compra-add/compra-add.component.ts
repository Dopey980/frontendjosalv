import { Component } from '@angular/core';
import { Compra } from '../../Modelo/Compra';
import { Inmueble } from '../../Modelo/Inmueble';
import { Router } from '@angular/router';
import { CompraServiceService } from '../../Service/CompraService/compra-service.service';
import { Persona_compra } from '../../Modelo/Persona_compra';

@Component({
  selector: 'app-compra-add',
  templateUrl: './compra-add.component.html',
  styleUrl: './compra-add.component.css'
})
export class CompraAddComponent {

  compra = new Compra();
  inmuebles: Inmueble[] = [];
  personas: Persona_compra[] = [];


  constructor(private router:Router, private service:CompraServiceService){}

  ngOnInit() {
    this.getInmueble();
    this.getPersona();
  }

  getInmueble() {
    this.service.getInmueble().subscribe(data => {
          this.inmuebles = data;
        });
  }

  getPersona() {
    this.service.getPersona().subscribe(data => {
          this.personas = data;
        });
  }

  Guardar(compra:Compra){
    console.log("Nombres: " + compra.id_compra)
    alert("Nombres: " + compra.id_compra);
    
    this.service.createCompra(compra)
    .subscribe(data=>{
      alert("Se agrego el análisis de riesgo con Exito...!!!");
      this.router.navigate(["compra-listar"]);
    })
  }
}
