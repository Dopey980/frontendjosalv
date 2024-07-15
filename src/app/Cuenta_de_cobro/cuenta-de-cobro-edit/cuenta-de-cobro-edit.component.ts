import { Component } from '@angular/core';
import { Cuenta_de_cobro } from '../../Modelo/Cuenta_de_cobro';
import { Persona_arriendo } from '../../Modelo/Persona_arriendo';
import { Arriendo } from '../../Modelo/Arriendo';
import { Router } from '@angular/router';
import { CuentaDeCobroServiceService } from '../../Service/Cuenta_de_cobroService/cuenta-de-cobro-service.service';

@Component({
  selector: 'app-cuenta-de-cobro-edit',
  templateUrl: './cuenta-de-cobro-edit.component.html',
  styleUrl: './cuenta-de-cobro-edit.component.css'
})
export class CuentaDeCobroEditComponent {

  cuenta = new Cuenta_de_cobro();
  inquilinos: Persona_arriendo[] = [];
  arriendos: Arriendo[] = [];


  constructor(private router:Router, private service:CuentaDeCobroServiceService){}

  ngOnInit() {
    this.Editar();
    this.getInquilino();
    this.getArriendo();
  }

  getInquilino() {
    this.service.getInquilino().subscribe(data => {
          this.inquilinos = data;
        });
  }

  getArriendo() {
    this.service.getArriendo().subscribe(data => {
          this.arriendos = data;
        });
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getCuentaId(id).
      subscribe(data=>{
        this.cuenta=data;
      })
  }

  Actualizar(cuenta:Cuenta_de_cobro){
    this.service.updateCuenta(this.cuenta).subscribe(data=>{
      this.cuenta=data;
      alert("Actualizado con Exito...!!!" + this.cuenta.id_cuenta_de_cobro);
      this.router.navigate(["cuenta-de-cobro-listar"]);
    } )
  }
}
