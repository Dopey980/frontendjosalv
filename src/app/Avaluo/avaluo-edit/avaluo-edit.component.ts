import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AvaluoserviceService } from '../../Service/AvaluoService/avaluoservice.service';
import { Avaluo } from '../../Modelo/Avaluo';
import { Inmueble } from '../../Modelo/Inmueble';

@Component({
  selector: 'app-avaluo-edit',
  templateUrl: './avaluo-edit.component.html',
  styleUrl: './avaluo-edit.component.css'
})
export class AvaluoEditComponent {

  avaluo :Avaluo=new Avaluo();
  inmuebles: Inmueble[] = [];

  constructor(private router:Router, private service:AvaluoserviceService){}

  ngOnInit(){ 
    this.Editar();
    this.getInmueble();
  }

  getInmueble() {
    this.service.getInmueble().subscribe(data => {
          this.inmuebles = data;
        });
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getAvaluoId(id).
      subscribe(data=>{
        this.avaluo=data;
      })
  }

  Actualizar(avaluo:Avaluo){
    this.service.updateAvaluo(this.avaluo).subscribe(data=>{
      this.avaluo=data;
      alert("Actualizado con Exito...!!!" + this.avaluo.id_avaluo);
      this.router.navigate(["avaluo-listar"]);
    } )
  }
}
