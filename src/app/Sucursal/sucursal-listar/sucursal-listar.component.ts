import { Component } from '@angular/core';
import { Sucursal } from '../../Modelo/Sucursal';
import { SucursalserviceService } from '../../Service/SucursalService/sucursalservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucursal-listar',
  templateUrl: './sucursal-listar.component.html',
  styleUrl: './sucursal-listar.component.css'
})
export class SucursalListarComponent {

  sucursal:Sucursal[] = [];
  
  constructor(private service:SucursalserviceService, private router:Router){
    //this.sucursal = [];
  }
    

  ngOnInit(): void {
      this.service.getSucursal()
      .subscribe(data=>{
        this.sucursal=data;
      })
  }

  Editar(sucursal:Sucursal): void{
    alert("Llegamos a Editar persona...!!!" + sucursal.nombre);
    localStorage.setItem("id",sucursal.id_sucursal.toString());
    this.router.navigate(["sucursal-edit"]);
  }

  Delete(sucursal:Sucursal){  
    this.service.deleteSucursal(sucursal)
    .subscribe(data=>{
      this.sucursal=this.sucursal.filter(p=>p==sucursal);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
