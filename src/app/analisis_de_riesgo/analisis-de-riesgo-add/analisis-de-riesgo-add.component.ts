import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/Analisis_de_riesgoService/service.service';
import { Analisis_de_riesgo } from '../../Modelo/Analisis_de_riesgo';
import { Inmueble } from '../../Modelo/Inmueble';


@Component({
  selector: 'app-analisis-de-riesgo-add',
  templateUrl: './analisis-de-riesgo-add.component.html',
  styleUrl: './analisis-de-riesgo-add.component.css'
})
export class AnalisisDeRiesgoAddComponent implements OnInit{

  analisis_de_riesgo = new Analisis_de_riesgo();
  inmuebles: Inmueble[] = [];

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit() {
    this.getInmueble();
  }

  getInmueble() {
    this.service.getInmueble().subscribe(data => {
          this.inmuebles = data;
        });
  }
 

  Guardar(analisis_de_riesgo:Analisis_de_riesgo){
    console.log("Nombres: " + analisis_de_riesgo.id_analisis_de_riesgo)
    alert("Nombres: " + analisis_de_riesgo.id_analisis_de_riesgo);
    
    this.service.createanalisis_de_riesgo(analisis_de_riesgo)
    .subscribe(data=>{
      alert("Se agrego el análisis de riesgo con Exito...!!!");
      this.router.navigate(["analisis-de-riesgo-listar"]);
    })
  }
}
