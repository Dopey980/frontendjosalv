import { Component } from '@angular/core';
import { Compra } from '../../Modelo/Compra';
import { CompraServiceService } from '../../Service/CompraService/compra-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compra-listar',
  templateUrl: './compra-listar.component.html',
  styleUrl: './compra-listar.component.css'
})
export class CompraListarComponent {
  compras:Compra[] = [];

  constructor(private service:CompraServiceService, private router:Router){
    //this.compras = [];
  }

  ngOnInit(): void {
    this.service.getCompra()
    .subscribe(data=>{
      this.compras=data;
    })
  }

  Editar(compra:Compra): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + compra.id_compra);
    localStorage.setItem("id",compra.id_compra.toString());
    this.router.navigate(["cita-edit"]);
  }
  
  Delete(compra:Compra){  
    this.service.deleteCompra(compra)
    .subscribe(data=>{
      this.compras=this.compras.filter(p=>p==compra);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
