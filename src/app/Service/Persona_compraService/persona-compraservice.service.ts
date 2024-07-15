import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona_compra } from '../../Modelo/Persona_compra';
import { Compra } from '../../Modelo/Compra';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaCompraserviceService {

  private Urlpersona_compra='http://localhost:8080/personas_compras/submit';
  private Urlcompra='http://localhost:8080/compras/submit'

  constructor(private http:HttpClient) { }

  getPersona_compra(){
    return this.http.get<Persona_compra[]>(this.Urlpersona_compra);
  }

  createPersona_compra(persona_compra:Persona_compra){
    alert("Llegamos al servicio de Crear Persona...!!!" + persona_compra.id_persona_compra);
    return this.http.post<Persona_compra>(this.Urlpersona_compra, persona_compra);
  }

  getPersona_compraId(id:number){
    return this.http.get<Persona_compra>(this.Urlpersona_compra+"/"+id);
  }

  updatePersona_compra(persona_compra:Persona_compra){
    return this.http.put<Persona_compra>(this.Urlpersona_compra+"/"+persona_compra.id_persona_compra, persona_compra);
  }

  deletePersona_compra(persona_compra:Persona_compra){
    return this.http.delete<Persona_compra>(this.Urlpersona_compra+"/"+persona_compra.id_persona_compra);
  }

  getCompra(): Observable<Compra[]> {
    return this.http.get<Compra[]>(this.Urlcompra);
  }

} 