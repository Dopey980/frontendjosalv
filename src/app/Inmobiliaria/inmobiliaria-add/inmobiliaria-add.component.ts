import { Component } from '@angular/core';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';
import { Router } from '@angular/router';
import { InmobiliariaServiceService } from '../../Service/InmobiliariaService/inmobiliaria-service.service';

@Component({
  selector: 'app-inmobiliaria-add',
  templateUrl: './inmobiliaria-add.component.html',
  styleUrl: './inmobiliaria-add.component.css'
})
export class InmobiliariaAddComponent {

  inmobiliaria = new Inmobiliaria();



  constructor(private router:Router, private service:InmobiliariaServiceService){}

  ngOnInit() {

  }


  Guardar(inmobiliaria:Inmobiliaria){
    console.log("Nombres: " + inmobiliaria.id_inmobiliaria)
    alert("Nombres: " + inmobiliaria.id_inmobiliaria);
    
    this.service.createInmobiliaria(inmobiliaria)
    .subscribe(data=>{
      alert("Se agrego el análisis de riesgo con Exito...!!!");
      this.router.navigate(["inmobiliaria-listar"]);
    })
  }
}
