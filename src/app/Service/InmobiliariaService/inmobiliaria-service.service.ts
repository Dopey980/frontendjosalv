import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';

@Injectable({
  providedIn: 'root'
})
export class InmobiliariaServiceService {

  private Urlinmobiliaria='http://localhost:8080/inmobiliarias/submit';


  constructor(private http:HttpClient) { }

  getInmobiliaria(){
    return this.http.get<Inmobiliaria[]>(this.Urlinmobiliaria);
  }

  createInmobiliaria(inmobiliaria:Inmobiliaria){
    alert("Llegamos al servicio de Crear Persona...!!!" + inmobiliaria.id_inmobiliaria);
    return this.http.post<Inmobiliaria>(this.Urlinmobiliaria, inmobiliaria);
  }

  getInmobiliariaId(id:number){
    return this.http.get<Inmobiliaria>(this.Urlinmobiliaria+"/"+id);
  }

  updateInmobiliaria(inmobiliaria:Inmobiliaria){
    return this.http.put<Inmobiliaria>(this.Urlinmobiliaria+"/"+inmobiliaria.id_inmobiliaria, inmobiliaria);
  }

  deleteInmobiliaria(inmobiliaria:Inmobiliaria){
    return this.http.delete<Inmobiliaria>(this.Urlinmobiliaria+"/"+inmobiliaria.id_inmobiliaria);
  }

}
