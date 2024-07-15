import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AvaluoserviceService } from '../../Service/AvaluoService/avaluoservice.service';
import { Avaluo } from '../../Modelo/Avaluo';

@Component({
  selector: 'app-avaluo-listar',
  templateUrl: './avaluo-listar.component.html',
  styleUrl: './avaluo-listar.component.css'
})

export class AvaluoListarComponent {

  avaluos:Avaluo[] = [];
  constructor(private service:AvaluoserviceService, private router:Router){
    //this.avaluos = [];
    
  } 
    

  ngOnInit(): void {
      this.service.getAvaluos()
      .subscribe(data=>{
        this.avaluos=data;
      })
  }

  Editar(avaluo:Avaluo): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + avaluo.id_avaluo);
    localStorage.setItem("id",avaluo.id_avaluo.toString());
    this.router.navigate(["avaluo-edit"]);
  }

  Delete(avaluo:Avaluo){  
    this.service.deleteAvaluo(avaluo)
    .subscribe(data=>{
      this.avaluos=this.avaluos.filter(p=>p==avaluo);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
