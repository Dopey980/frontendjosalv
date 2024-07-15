import { Component } from '@angular/core';
import { Sucursal } from '../../Modelo/Sucursal';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';
import { Ubicacion_geo } from '../../Modelo/Ubicacion_geo';
import { Router } from '@angular/router';
import { SucursalserviceService } from '../../Service/SucursalService/sucursalservice.service';

@Component({
  selector: 'app-sucursal-edit',
  templateUrl: './sucursal-edit.component.html',
  styleUrl: './sucursal-edit.component.css'
})
export class SucursalEditComponent {
  sucursal :Sucursal=new Sucursal();
  inmobiliaria: Inmobiliaria[] = [];
  ubicacion: Ubicacion_geo [] = [];

  constructor(private router:Router, private service:SucursalserviceService){}

  ngOnInit(){ 
    this.Editar();
    this.getInmobiliaria();
    this.getUbicacion();
  }

  getInmobiliaria() {
    this.service.getInmobiliaria().subscribe(data => {
          this.inmobiliaria = data;
        });
  }

  getUbicacion() {
    this.service.getUbicacion().subscribe(data => {
          this.ubicacion = data;
        });
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getSucursalId(id).
      subscribe(data=>{
        this.sucursal=data;
      })
  }

  Actualizar(sucursal:Sucursal){
    this.service.updateSucursal(this.sucursal).subscribe(data=>{
      this.sucursal=data;
      alert("Actualizado con Exito...!!!" + this.sucursal.nombre);
      this.router.navigate(["sucursal-listar"]);
    } )
  }
}
