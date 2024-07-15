import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaserviceService } from '../../Service/CitaService/citaservice.service';
import { Cita } from '../../Modelo/Cita';

@Component({
  selector: 'app-cita-listar',
  templateUrl: './cita-listar.component.html',
  styleUrl: './cita-listar.component.css'
})
export class CitaListarComponent {

  citas:Cita[] = [];

  constructor(private service:CitaserviceService, private router:Router){
    //this.citas = [];
  }

  ngOnInit(): void {
    this.service.getCitas()
    .subscribe(data=>{
      this.citas=data;
    })
  }

  Editar(cita:Cita): void{
    alert("Llegamos a Editar análisis de riesgo...!!! " + cita.id_cita);
    localStorage.setItem("id",cita.id_cita.toString());
    this.router.navigate(["cita-edit"]);
  }
  
  Delete(cita:Cita){  
    this.service.deleteCita(cita)
    .subscribe(data=>{
      this.citas=this.citas.filter(p=>p==cita);
      alert("Usuario eliminado...");
      window.location.reload();
    })
  }


}
