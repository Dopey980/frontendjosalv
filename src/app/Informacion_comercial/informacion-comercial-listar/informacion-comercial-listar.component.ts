import { Component } from '@angular/core';
import { Informacion_comercial } from '../../Modelo/Informacion_comercial';
import { Router } from '@angular/router';
import { InformacionComercialserviceService } from '../../Service/Informacion_comercialService/informacion-comericalservice.service';

@Component({
  selector: 'app-informacion-comercial-listar',
  templateUrl: './informacion-comercial-listar.component.html',
  styleUrl: './informacion-comercial-listar.component.css'
})
export class InformacionComercialListarComponent {
  informacion:Informacion_comercial[] = [];

  constructor(private service:InformacionComercialserviceService, private router:Router){
    //this.informacion = [];
  }

  ngOnInit(): void {
    this.service.getInformacion_comercial()
    .subscribe(data=>{
      this.informacion=data;
    })
  }

  Editar(informacion:Informacion_comercial): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + informacion.id_informacion_comercial);
    localStorage.setItem("id",informacion.id_informacion_comercial.toString());
    this.router.navigate(["informacion-comercial-edit"]);
  }
  
  Delete(informacion:Informacion_comercial){  
    this.service.deleteInformacion_comercial(informacion)
    .subscribe(data=>{
      this.informacion=this.informacion.filter(p=>p==informacion);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
