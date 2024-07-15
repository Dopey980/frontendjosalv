import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaserviceService } from '../../Service/CitaService/citaservice.service';
import { Cita } from '../../Modelo/Cita';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-cita-edit',
  templateUrl: './cita-edit.component.html',
  styleUrl: './cita-edit.component.css'
})
export class CitaEditComponent {

  cita = new Cita();
  personas: Persona[] = [];


  constructor(private router:Router, private service:CitaserviceService){}

  ngOnInit() {
    this.Editar();
    this.getPersona();
  }

  getPersona() {
    this.service.getPersona().subscribe(data => {
          this.personas = data;
        });
  }

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getCitaId(id).
      subscribe(data=>{
        this.cita=data;
      })
  }

  Actualizar(cita:Cita){
    this.service.updateCita(this.cita).subscribe(data=>{
      this.cita=data;
      alert("Actualizado con Exito...!!!" + this.cita.id_cita);
      this.router.navigate(["cita-listar"]);
    } )
  }
}
