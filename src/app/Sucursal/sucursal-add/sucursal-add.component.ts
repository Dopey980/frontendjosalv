import { Component } from '@angular/core';
import { Sucursal } from '../../Modelo/Sucursal';
import { Router } from '@angular/router';
import { SucursalserviceService } from '../../Service/SucursalService/sucursalservice.service';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';
import { Ubicacion_geo } from '../../Modelo/Ubicacion_geo';

@Component({
  selector: 'app-sucursal-add',
  templateUrl: './sucursal-add.component.html',
  styleUrl: './sucursal-add.component.css'
})
export class SucursalAddComponent {

  sucursal = new Sucursal();
  inmobiliaria: Inmobiliaria[] = [];
  ubicacion: Ubicacion_geo [] = [];


  constructor(private router:Router, private service:SucursalserviceService){}

  ngOnInit() {
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


  Guardar(sucursal:Sucursal){
    console.log("Nombres: " + sucursal.nombre)
    alert("Nombres: " + sucursal.nombre);
    
    this.service.createSucursal(sucursal)
    .subscribe(data=>{
      alert("Se agrego la persona con Exito...!!!");
      this.router.navigate(["sucursal-listar"]);
    })
    
  } 
}
