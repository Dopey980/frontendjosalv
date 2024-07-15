import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/PersonaService/service.service';
import { Persona } from '../../Modelo/Persona';
import { Tipo_persona } from '../../Modelo/Tipo_persona';
import { Sucursal } from '../../Modelo/Sucursal';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent implements OnInit{

  persona = new Persona();
  tipos: Tipo_persona[] = [];
  sucursales: Sucursal[] = [];

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit() {
    this.getTiposDePersona();
    this.getSucursal()
  }
  
  getTiposDePersona() {
    this.service.getTiposDePersona().subscribe(data => {
          this.tipos = data;
        });
  }

  getSucursal() {
    this.service.getSucursal().subscribe(data => {
          this.sucursales = data;
        });
  }

  Guardar(persona:Persona){
    console.log("Nombres: " + persona.nombre)
    alert("Nombres: " + persona.nombre);
    
    this.service.createPersona(persona)
    .subscribe(data=>{
      alert("Se agrego la persona con Exito...!!!");
      this.router.navigate(["listar"]);
    })
    
  }
}
