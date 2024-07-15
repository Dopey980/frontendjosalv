import { Component } from '@angular/core';
import { InmuebleServiceService } from '../../Service/InmuebleService/inmueble-service.service';
import { Router } from '@angular/router';
import { Inmueble } from '../../Modelo/Inmueble';
import { Persona } from '../../Modelo/Persona';
import { Ubicacion_geo } from '../../Modelo/Ubicacion_geo';

@Component({
  selector: 'app-inmuebles-add',
  templateUrl: './inmuebles-add.component.html',
  styleUrl: './inmuebles-add.component.css'
})
export class InmueblesAddComponent {

  inmueble = new Inmueble();
  personas: Persona[] = [];
  ubicacion: Ubicacion_geo[] = [];



  constructor(private router:Router, private service:InmuebleServiceService){}

  ngOnInit() {
    this.getPersona();
  }

  getPersona() {
    this.service.getPersona().subscribe(data => {
          this.personas = data;
        });
  }

  getUbicacion() {
    this.service.getUbicacion().subscribe(data => {
          this.ubicacion = data;
        });
  }

  Guardar(inmueble:Inmueble){
    console.log("Nombres: " + inmueble.id_inmueble)
    alert("Nombres: " + inmueble.id_inmueble);
    
    this.service.createInmueble(inmueble)
    .subscribe(data=>{
      alert("Se agrego el análisis de riesgo con Exito...!!!");
      this.router.navigate(["inmueble-listar"]);
    })
  }
}
