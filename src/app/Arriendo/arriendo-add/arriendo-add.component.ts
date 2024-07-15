import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/ArriendoService/service.service';
import { Arriendo } from '../../Modelo/Arriendo';
import { Inmueble } from '../../Modelo/Inmueble';

@Component({
  selector: 'app-arriendo-add',
  templateUrl: './arriendo-add.component.html',
  styleUrl: './arriendo-add.component.css'
})
export class ArriendoAddComponent {

  arriendo = new Arriendo();
  inmuebles: Inmueble[] = [];

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit() {
    this.getInmueble();
  }

  getInmueble() {
    this.service.getInmueble().subscribe(data => {
          this.inmuebles = data;
        });
  }

  Guardar(arriendo:Arriendo){
    console.log("Nombres: " + arriendo.id_arriendo)
    alert("Nombres: " + arriendo.id_arriendo);
    
    this.service.createArriendo(arriendo)
    .subscribe(data=>{
      alert("Se agrego el arriendo con Exito...!!!");
      this.router.navigate(["arriendo-listar"]);
    })
  }
}
