import { Component } from '@angular/core';
import { Pago_por_estudio } from '../../Modelo/Pago_por_estudio';
import { PagoPorEstudioserviceService } from '../../Service/Pago_por_estudioService/pago-por-estudioservice.service';
import { Router } from '@angular/router';
import { Inmueble } from '../../Modelo/Inmueble';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-pago-por-estudio-add',
  templateUrl: './pago-por-estudio-add.component.html',
  styleUrl: './pago-por-estudio-add.component.css'
})
export class PagoPorEstudioAddComponent {
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
      alert("Se agrego el Pago_por_estudio con Exito...!!!");
      this.router.navigate(["pago-por-estudio-listar"]);
    })
    
  }
}
