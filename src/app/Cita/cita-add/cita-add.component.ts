import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CitaserviceService } from '../../Service/CitaService/citaservice.service';
import { Cita } from '../../Modelo/Cita';
import { Persona } from '../../Modelo/Persona';

@Component({
  selector: 'app-cita-add',
  templateUrl: './cita-add.component.html',
  styleUrl: './cita-add.component.css'
})
export class CitaAddComponent implements OnInit {

  cita = new Cita();
  personas: Persona[] = [];


  constructor(private router:Router, private service:CitaserviceService){}

  ngOnInit() {
    this.getPersona();
  }

  getPersona() {
    this.service.getPersona().subscribe(data => {
          this.personas = data;
        });
  }

  Guardar(cita:Cita){
    console.log("Nombres: " + cita.id_cita)
    alert("Nombres: " + cita.id_cita);
    
    this.service.createCita(cita)
    .subscribe(data=>{
      alert("Se agrego el análisis de riesgo con Exito...!!!");
      this.router.navigate(["cita-listar"]);
    })
  }
}
