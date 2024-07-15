import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/PersonaService/service.service';
import { Persona } from '../../Modelo/Persona';
import { Tipo_persona } from '../../Modelo/Tipo_persona';
import { Sucursal } from '../../Modelo/Sucursal';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent implements OnInit{

  persona :Persona=new Persona();
  tipos: Tipo_persona[] = [];
  sucursales: Sucursal[] = [];

  constructor(private router:Router, private service:ServiceService){}

  ngOnInit(){ 
    this.Editar();
    this.getSucursal();
    this.getTiposDePersona();
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

  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getPersonaId(id).
      subscribe(data=>{
        this.persona=data;
      })
  }

  Actualizar(persona:Persona){
    this.service.updatePersona(this.persona).subscribe(data=>{
      this.persona=data;
      alert("Actualizado con Exito...!!!" + this.persona.nombre);
      this.router.navigate(["listar"]);
    } )
  }
}
