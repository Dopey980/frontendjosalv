import { Component } from '@angular/core';
import { Cuenta_de_cobro } from '../../Modelo/Cuenta_de_cobro';
import { CuentaDeCobroServiceService } from '../../Service/Cuenta_de_cobroService/cuenta-de-cobro-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta-de-cobro-listar',
  templateUrl: './cuenta-de-cobro-listar.component.html',
  styleUrl: './cuenta-de-cobro-listar.component.css'
})
export class CuentaDeCobroListarComponent {

  cuentas:Cuenta_de_cobro[] = [];

  constructor(private service:CuentaDeCobroServiceService, private router:Router){
    //this.cuentas = [];
  }

  ngOnInit(): void {
    this.service.getCuenta()
    .subscribe(data=>{
      this.cuentas=data;
    })
  }

  Editar(cuenta:Cuenta_de_cobro): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + cuenta.id_cuenta_de_cobro);
    localStorage.setItem("id",cuenta.id_cuenta_de_cobro.toString());
    this.router.navigate(["cita-edit"]);
  }
  
  Delete(cuenta:Cuenta_de_cobro){  
    this.service.deleteCuenta(cuenta)
    .subscribe(data=>{
      this.cuentas=this.cuentas.filter(p=>p==cuenta);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
