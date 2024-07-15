import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InformacionComercialserviceService } from '../../Service/Informacion_comercialService/informacion-comericalservice.service';
import { Informacion_comercial } from '../../Modelo/Informacion_comercial';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-informacion-comercial-add',
  templateUrl: './informacion-comercial-add.component.html',
  styleUrl: './informacion-comercial-add.component.css'
})
export class InformacionComercialAddComponent {
  informacion = new Informacion_comercial();
  personas: Persona[] = [];


  constructor(private router:Router, private service:InformacionComercialserviceService){}

  ngOnInit() {
    this.getPersona();
  }

  getPersona() {
    this.service.getPersona().subscribe(data => {
          this.personas = data;
        });
  }

  Guardar(informacion:Informacion_comercial){
    console.log("Nombres: " + informacion.id_informacion_comercial)
    alert("Nombres: " + informacion.id_informacion_comercial);
    
    this.service.createInformacion_comercial(informacion)
    .subscribe(data=>{
      alert("Se agrego el análisis de riesgo con Exito...!!!");
      this.router.navigate(["Informacion_comercial-listar"]);
    })
  }
}
