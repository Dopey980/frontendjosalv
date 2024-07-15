import { Component } from '@angular/core';
import { Cuenta_de_cobro } from '../../Modelo/Cuenta_de_cobro';
import { Persona_arriendo } from '../../Modelo/Persona_arriendo';
import { Arriendo } from '../../Modelo/Arriendo';
import { Router } from '@angular/router';
import { CuentaDeCobroServiceService } from '../../Service/Cuenta_de_cobroService/cuenta-de-cobro-service.service';

@Component({
  selector: 'app-cuenta-de-cobro-add',
  templateUrl: './cuenta-de-cobro-add.component.html',
  styleUrl: './cuenta-de-cobro-add.component.css'
})
export class CuentaDeCobroAddComponent {
  cuenta = new Cuenta_de_cobro();
  inquilinos: Persona_arriendo[] = [];
  arriendos: Arriendo[] = [];


  constructor(private router:Router, private service:CuentaDeCobroServiceService){}

  ngOnInit() {
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

  Guardar(cuenta:Cuenta_de_cobro){
    console.log("Nombres: " + cuenta.id_cuenta_de_cobro)
    alert("Nombres: " + cuenta.id_cuenta_de_cobro);
    
    this.service.createCuenta(cuenta)
    .subscribe(data=>{
      alert("Se agrego el análisis de riesgo con Exito...!!!");
      this.router.navigate(["cuenta-de-cobro-listar"]);
    })
  }
}
