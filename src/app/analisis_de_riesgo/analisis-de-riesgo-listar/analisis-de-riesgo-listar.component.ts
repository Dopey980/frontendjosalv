import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/Analisis_de_riesgoService/service.service';
import { Analisis_de_riesgo } from '../../Modelo/Analisis_de_riesgo';

@Component({
  selector: 'app-analisis-de-riesgo-listar',
  templateUrl: './analisis-de-riesgo-listar.component.html',
  styleUrl: './analisis-de-riesgo-listar.component.css'
})
export class AnalisisDeRiesgoListarComponent implements OnInit {
  analisis_de_riesgo:Analisis_de_riesgo[] = [];
  constructor(private service:ServiceService, private router:Router){
    //this.analisis_de_riesgo = [];
  }
    

  ngOnInit(): void {
      this.service.getanalisis_de_riesgo()
      .subscribe(data=>{
        this.analisis_de_riesgo=data;
      })
  }

  Editar(analisis_de_riesgo:Analisis_de_riesgo): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + analisis_de_riesgo.id_analisis_de_riesgo);
    localStorage.setItem("id",analisis_de_riesgo.id_analisis_de_riesgo.toString());
    this.router.navigate(["analisis-de-riesgo-edit"]);
  }

  Delete(analisis_de_riesgo:Analisis_de_riesgo){  
    this.service.deleteanalisis_de_riesgo(analisis_de_riesgo)
    .subscribe(data=>{
      this.analisis_de_riesgo=this.analisis_de_riesgo.filter(p=>p==analisis_de_riesgo);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
