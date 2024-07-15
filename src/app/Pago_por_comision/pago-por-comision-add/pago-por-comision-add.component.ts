import { Component } from '@angular/core';
import { Pago_por_comision } from '../../Modelo/Pago_por_comision';
import { Venta } from '../../Modelo/Venta';
import { Router } from '@angular/router';
import { PagoPorComisionserviceService } from '../../Service/Pago_por_comisionService/pago-por-comisionservice.service';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-pago-por-comision-add',
  templateUrl: './pago-por-comision-add.component.html',
  styleUrl: './pago-por-comision-add.component.css'
})
export class PagoPorComisionAddComponent {
  pago = new Pago_por_comision();
  personas: Persona[] = [];
  ventas: Venta[] = [];

  constructor(private router:Router, private service:PagoPorComisionserviceService){}

  ngOnInit() {
    this.getPersona();
    this.getVenta()
  }
  
  getPersona() {
    this.service.getPersona().subscribe(data => {
          this.personas = data;
        });
  }

  getVenta() {
    this.service.getVenta().subscribe(data => {
          this.ventas = data;
        });
  }

  Guardar(pago:Pago_por_comision){
    console.log("Nombres: " + pago.id_pago_por_comision)
    alert("Nombres: " + pago.id_pago_por_comision);
    
    this.service.createPago_por_comision(pago)
    .subscribe(data=>{
      alert("Se agrego el Pago_por_comision con Exito...!!!");
      this.router.navigate(["pago-por-comision-listar"]);
    })
    
  }
}
