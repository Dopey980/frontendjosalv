import { Component } from '@angular/core';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';
import { Router } from '@angular/router';
import { InmobiliariaServiceService } from '../../Service/InmobiliariaService/inmobiliaria-service.service';

@Component({
  selector: 'app-inmobiliaria-edit',
  templateUrl: './inmobiliaria-edit.component.html',
  styleUrl: './inmobiliaria-edit.component.css'
})
export class InmobiliariaEditComponent {

  inmobiliaria = new Inmobiliaria();



  constructor(private router:Router, private service:InmobiliariaServiceService){}

  ngOnInit() {
    this.Editar();
  }


  Editar(){
    let id=Number(localStorage.getItem("id") || "");
    this.service.getInmobiliariaId(id).
      subscribe(data=>{
        this.inmobiliaria=data;
      })
  }

  Actualizar(inmobiliaria:Inmobiliaria){
    this.service.updateInmobiliaria(this.inmobiliaria).subscribe(data=>{
      this.inmobiliaria=data;
      alert("Actualizado con Exito...!!!" + this.inmobiliaria.id_inmobiliaria);
      this.router.navigate(["informacion-comercial-listar"]);
    } )
  }
}
