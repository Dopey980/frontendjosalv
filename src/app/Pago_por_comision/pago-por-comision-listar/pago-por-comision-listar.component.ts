import { Component } from '@angular/core';
import { Pago_por_comision } from '../../Modelo/Pago_por_comision';
import { PagoPorComisionserviceService } from '../../Service/Pago_por_comisionService/pago-por-comisionservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-por-comision-listar',
  templateUrl: './pago-por-comision-listar.component.html',
  styleUrl: './pago-por-comision-listar.component.css'
})
export class PagoPorComisionListarComponent {
  pagos:Pago_por_comision[] = [];
  constructor(private service:PagoPorComisionserviceService, private router:Router){
    //this.pagos = [];
  }
    

  ngOnInit(): void {
      this.service.getPago_por_comision()
      .subscribe(data=>{
        this.pagos=data;
      })
  }

  Editar(pago:Pago_por_comision): void{
    alert("Llegamos a Editar persona...!!!" + pago.id_pago_por_comision);
    localStorage.setItem("id",pago.id_pago_por_comision.toString());
    this.router.navigate(["pago-por-comision-edit"]);
  }

  Delete(pago:Pago_por_comision){  
    this.service.deletePago_por_comision(pago)
    .subscribe(data=>{
      this.pagos=this.pagos.filter(p=>p==pago);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
