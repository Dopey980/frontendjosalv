import { Component } from '@angular/core';
import { Inmueble } from '../../Modelo/Inmueble';
import { Router } from '@angular/router';
import { InmuebleServiceService } from '../../Service/InmuebleService/inmueble-service.service';
import { Persona } from '../../Modelo/Persona';
import { Ubicacion_geo } from '../../Modelo/Ubicacion_geo';

@Component({
  selector: 'app-inmuebles-edit',
  templateUrl: './inmuebles-edit.component.html',
  styleUrl: './inmuebles-edit.component.css'
})
export class InmueblesEditComponent {

  inmueble = new Inmueble();
  personas: Persona[] = [];
  ubicacion: Ubicacion_geo[] = [];


  constructor(private router:Router, private service:InmuebleServiceService){}

  ngOnInit() {
    this.Editar();
    this.getPersona();
    this.getUbicacion();
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

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getInmuebleId(id).
      subscribe(data=>{
        this.inmueble=data;
      })
  }

  Actualizar(inmueble:Inmueble){
    this.service.updateInmueble(this.inmueble).subscribe(data=>{
      this.inmueble=data;
      alert("Actualizado con Exito...!!!" + this.inmueble.id_inmueble);
      this.router.navigate(["inmueble-listar"]);
    } )
  }
}
