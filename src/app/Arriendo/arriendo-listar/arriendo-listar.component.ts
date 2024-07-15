import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/ArriendoService/service.service';
import { Arriendo } from '../../Modelo/Arriendo';

@Component({
  selector: 'app-arriendo-listar',
  templateUrl: './arriendo-listar.component.html',
  styleUrl: './arriendo-listar.component.css'
})
export class ArriendoListarComponent {
  
  arriendos:Arriendo[] = [];
  constructor(private service:ServiceService, private router:Router){
    //this.arriendos = [];
  } 
    

  ngOnInit(): void {
      this.service.getArriendos()
      .subscribe(data=>{
        this.arriendos=data;
      })
  }

  Editar(arriendo:Arriendo): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + arriendo.id_arriendo);
    localStorage.setItem("id",arriendo.id_arriendo.toString());
    this.router.navigate(["arriendo-edit"]);
  }

  Delete(arriendo:Arriendo){  
    this.service.deleteArriendo(arriendo)
    .subscribe(data=>{
      this.arriendos=this.arriendos.filter(p=>p==arriendo);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }
}
