import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/Analisis_de_riesgoService/service.service';
import { Analisis_de_riesgo } from '../../Modelo/Analisis_de_riesgo';
import { Inmueble } from '../../Modelo/Inmueble';

@Component({
  selector: 'app-analisis-de-riesgo-edit',
  templateUrl: './analisis-de-riesgo-edit.component.html',
  styleUrl: './analisis-de-riesgo-edit.component.css'
})
export class AnalisisDeRiesgoEditComponent implements OnInit {

  analisis_de_riesgo :Analisis_de_riesgo=new Analisis_de_riesgo();
  inmuebles: Inmueble[] = [];

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(){ 
    this.Editar();
    this.getInmueble();
  }

  getInmueble() {
    this.service.getInmueble().subscribe(data => {
          this.inmuebles = data;
        });
  }

  Editar(){
    let id_analisis_de_riesgo=Number(localStorage.getItem("id") || "");
    this.service.getanalisis_de_riesgoId(id_analisis_de_riesgo).
      subscribe(data=>{
        this.analisis_de_riesgo=data;
      })
  }

  Actualizar(analisis_de_riesgo:Analisis_de_riesgo){
    this.service.updateanalisis_de_riesgo(this.analisis_de_riesgo)
    .subscribe(data=>{
      this.analisis_de_riesgo=data;
      alert("Actualizado con Exito...!!!" + this.analisis_de_riesgo.id_analisis_de_riesgo);
      this.router.navigate(["analisis-de-riesgo-listar"]);
    } )
  }
}
