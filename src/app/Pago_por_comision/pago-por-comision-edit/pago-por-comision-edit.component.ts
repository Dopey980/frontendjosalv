import { Component } from '@angular/core';
import { Pago_por_comision } from '../../Modelo/Pago_por_comision';
import { Persona } from '../../Modelo/Persona';
import { Venta } from '../../Modelo/Venta';
import { PagoPorComisionserviceService } from '../../Service/Pago_por_comisionService/pago-por-comisionservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-por-comision-edit',
  templateUrl: './pago-por-comision-edit.component.html',
  styleUrl: './pago-por-comision-edit.component.css'
})
export class PagoPorComisionEditComponent {
  pago :Pago_por_comision=new Pago_por_comision();
  personas: Persona[] = [];
  ventas: Venta[] = [];

  constructor(private router:Router, private service:PagoPorComisionserviceService){}

  ngOnInit(){ 
    this.Editar();
    this.getVenta();
    this.getPersona();
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

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getPago_por_comisionId(id).
      subscribe(data=>{
        this.pago=data;
      })
  }

  Actualizar(pago:Pago_por_comision){
    this.service.updatePago_por_comision(this.pago).subscribe(data=>{
      this.pago=data;
      alert("Actualizado con Exito...!!!" + this.pago.id_pago_por_comision);
      this.router.navigate(["pago-por-comision-listar"]);
    } )
  }
}
