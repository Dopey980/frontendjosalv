import { Component } from '@angular/core';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';
import { InmobiliariaServiceService } from '../../Service/InmobiliariaService/inmobiliaria-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inmobiliaria-listar',
  templateUrl: './inmobiliaria-listar.component.html',
  styleUrl: './inmobiliaria-listar.component.css'
})
export class InmobiliariaListarComponent {

  inmobiliarias:Inmobiliaria[] = [];

  constructor(private service:InmobiliariaServiceService, private router:Router){
    //this.informacion = [];
  }

  ngOnInit(): void {
    this.service.getInmobiliaria()
    .subscribe(data=>{
      this.inmobiliarias=data;
    })
  }

  Editar(inmobiliaria:Inmobiliaria): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + inmobiliaria.id_inmobiliaria);
    localStorage.setItem("id",inmobiliaria.id_inmobiliaria.toString());
    this.router.navigate(["informacion-comercial-edit"]);
  }
  
  Delete(inmobiliaria:Inmobiliaria){  
    this.service.deleteInmobiliaria(inmobiliaria)
    .subscribe(data=>{
      this.inmobiliarias=this.inmobiliarias.filter(p=>p==inmobiliaria);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
