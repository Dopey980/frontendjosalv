import { Component } from '@angular/core';
import { Pago_por_estudio } from '../../Modelo/Pago_por_estudio';
import { PagoPorEstudioserviceService } from '../../Service/Pago_por_estudioService/pago-por-estudioservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pago-por-estudio-listar',
  templateUrl: './pago-por-estudio-listar.component.html',
  styleUrl: './pago-por-estudio-listar.component.css'
})
export class PagoPorEstudioListarComponent {

  pagos:Pago_por_estudio[] = [];
  
  constructor(private service:PagoPorEstudioserviceService, private router:Router){
    //this.pagos = [];
  }
    

  ngOnInit(): void {
      this.service.getPago_por_estudio()
      .subscribe(data=>{
        this.pagos=data;
      })
  }

  Editar(pago:Pago_por_estudio): void{
    alert("Llegamos a Editar persona...!!!" + pago.id_pago_por_estudio);
    localStorage.setItem("id",pago.id_pago_por_estudio.toString());
    this.router.navigate(["edit"]);
  }

  Delete(pago:Pago_por_estudio){  
    this.service.deletePago_por_estudio(pago)
    .subscribe(data=>{
      this.pagos=this.pagos.filter(p=>p==pago);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
