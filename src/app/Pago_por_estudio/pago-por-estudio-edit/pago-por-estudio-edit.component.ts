import { Component } from '@angular/core';
import { Pago_por_estudio } from '../../Modelo/Pago_por_estudio';
import { Persona } from '../../Modelo/Persona';
import { Inmueble } from '../../Modelo/Inmueble';
import { PagoPorEstudioserviceService } from '../../Service/Pago_por_estudioService/pago-por-estudioservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-por-estudio-edit',
  templateUrl: './pago-por-estudio-edit.component.html',
  styleUrl: './pago-por-estudio-edit.component.css'
})
export class PagoPorEstudioEditComponent {
  pago = new Pago_por_estudio();
  personas: Persona[] = [];
  inmuebles: Inmueble[] = [];

  constructor(private router:Router, private service:PagoPorEstudioserviceService){}

  ngOnInit() {
    this.getPersona();
    this.getInmueble()
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

  Guardar(pago:Pago_por_estudio){
    console.log("Nombres: " + pago.id_pago_por_estudio)
    alert("Nombres: " + pago.id_pago_por_estudio);
    
    this.service.createPago_por_estudio(pago)
    .subscribe(data=>{
      alert("Se agrego el pago con Exito...!!!");
      this.router.navigate(["pago-por-estudio-listar"]);
    })
    
  }
}
