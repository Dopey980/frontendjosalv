import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvaluoserviceService } from '../../Service/AvaluoService/avaluoservice.service';
import { Avaluo } from '../../Modelo/Avaluo';
import { Inmueble } from '../../Modelo/Inmueble';

@Component({
  selector: 'app-avaluo-add',
  templateUrl: './avaluo-add.component.html',
  styleUrl: './avaluo-add.component.css'
})
export class AvaluoAddComponent {

  avaluo = new Avaluo();
  inmuebles: Inmueble[] = [];

  constructor(private router:Router, private service:AvaluoserviceService){}

  ngOnInit() {
    this.getInmueble();
  }

  getInmueble() {
    this.service.getInmueble().subscribe(data => {
          this.inmuebles = data;
        });
  }

  Guardar(avaluo:Avaluo){
    console.log("Nombres: " + avaluo.id_avaluo)
    alert("Nombres: " + avaluo.id_avaluo);
    
    this.service.createAvaluo(avaluo)
    .subscribe(data=>{
      alert("Se agrego el análisis de riesgo con Exito...!!!");
      this.router.navigate(["avaluo-listar"]);
    })
  }
}
