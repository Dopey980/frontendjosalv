import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../../Modelo/Persona';
import { Tipo_persona } from '../../Modelo/Tipo_persona';
import { Sucursal } from '../../Modelo/Sucursal';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private Urlpersona='http://localhost:8080/personas/submit';
  private Urltipo_persona = 'http://localhost:8080/tipos_personas/submit';
  private Urlsucursal = 'http://localhost:8080/sucursales/submit';

  constructor(private http:HttpClient) { }

  getPersonas(){
    return this.http.get<Persona[]>(this.Urlpersona);
  }

  createPersona(persona:Persona){
    alert("Llegamos al servicio de Crear Persona...!!!" + persona.apellido);
    return this.http.post<Persona>(this.Urlpersona, persona);
  }

  getPersonaId(id:number){
    return this.http.get<Persona>(this.Urlpersona+"/"+id);
  }

  updatePersona(persona:Persona){
    return this.http.put<Persona>(this.Urlpersona+"/"+persona.id_persona, persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete<Persona>(this.Urlpersona+"/"+persona.id_persona);
  }

  getTiposDePersona(): Observable<Tipo_persona[]> {
    return this.http.get<Tipo_persona[]>(this.Urltipo_persona);
  }

  getSucursal(): Observable<Sucursal[]> {
    return this.http.get<Sucursal[]>(this.Urlsucursal);
  }

} 
