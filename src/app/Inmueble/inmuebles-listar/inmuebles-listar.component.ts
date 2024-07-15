import { Component } from '@angular/core';
import { Inmueble } from '../../Modelo/Inmueble';
import { Router } from '@angular/router';
import { InmuebleServiceService } from '../../Service/InmuebleService/inmueble-service.service';

@Component({
  selector: 'app-inmuebles-listar',
  templateUrl: './inmuebles-listar.component.html',
  styleUrl: './inmuebles-listar.component.css'
})
export class InmueblesListarComponent {

  inmuebles:Inmueble[] = [];

  constructor(private service:InmuebleServiceService, private router:Router){
    //this.inmuebles = [];
  }

  ngOnInit(): void {
    this.service.getInmueble()
    .subscribe(data=>{
      this.inmuebles=data;
    })
  }

  Editar(inmueble:Inmueble): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + inmueble.id_inmueble);
    localStorage.setItem("id",inmueble.id_inmueble.toString());
    this.router.navigate(["cita-edit"]);
  }
  
  Delete(inmueble:Inmueble){  
    this.service.deleteInmueble(inmueble)
    .subscribe(data=>{
      this.inmuebles=this.inmuebles.filter(p=>p==inmueble);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
