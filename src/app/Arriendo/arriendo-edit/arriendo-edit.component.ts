import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/ArriendoService/service.service';
import { Arriendo } from '../../Modelo/Arriendo';
import { Inmueble } from '../../Modelo/Inmueble';

@Component({
  selector: 'app-arriendo-edit',
  templateUrl: './arriendo-edit.component.html',
  styleUrl: './arriendo-edit.component.css'
})
export class ArriendoEditComponent {

  arriendo :Arriendo=new Arriendo();
  inmuebles: Inmueble[] = [];

  constructor(private router:Router, private service:ServiceService){}

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
    this.service.getArriendoId(id).
      subscribe(data=>{
        this.arriendo=data;
      })
  }

  Actualizar(arriendo:Arriendo){
    this.service.updateArriendo(this.arriendo).subscribe(data=>{
      this.arriendo=data;
      alert("Actualizado con Exito...!!!" + this.arriendo.id_arriendo);
      this.router.navigate(["arriendo-listar"]);
    } )
  }
}
