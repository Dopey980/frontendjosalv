import { Component } from '@angular/core';
import { Informacion_comercial } from '../../Modelo/Informacion_comercial';
import { Persona } from '../../Modelo/Persona';
import { Router } from '@angular/router';
import { InformacionComercialserviceService } from '../../Service/Informacion_comercialService/informacion-comericalservice.service';

@Component({
  selector: 'app-informacion-comercial-edit',
  templateUrl: './informacion-comercial-edit.component.html',
  styleUrl: './informacion-comercial-edit.component.css'
})
export class InformacionComercialEditComponent {
  informacion = new Informacion_comercial();
  personas: Persona[] = [];


  constructor(private router:Router, private service:InformacionComercialserviceService){}

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
    this.service.getInformacion_comercialId(id).
      subscribe(data=>{
        this.informacion=data;
      })
  }

  Actualizar(informacion:Informacion_comercial){
    this.service.updateInformacion_comercial(this.informacion).subscribe(data=>{
      this.informacion=data;
      alert("Actualizado con Exito...!!!" + this.informacion.id_informacion_comercial);
      this.router.navigate(["informacion-comercial-listar"]);
    } )
  }
}
