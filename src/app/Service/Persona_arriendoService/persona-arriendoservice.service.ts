import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona_arriendo } from '../../Modelo/Persona_arriendo';
import { Arriendo } from '../../Modelo/Arriendo';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PersonaArriendoserviceService {

  private Urlpersona_arriendo='http://localhost:8080/personas_arriendos/submit';
  private Urlarriendo='http://localhost:8080/arriendos/submit'

  constructor(private http:HttpClient) { }

  getPersona_arriendo(){
    return this.http.get<Persona_arriendo[]>(this.Urlpersona_arriendo);
  }

  createPersona_arriendo(persona_arriendo:Persona_arriendo){
    alert("Llegamos al servicio de Crear Persona...!!!" + persona_arriendo.id_persona_arriendo);
    return this.http.post<Persona_arriendo>(this.Urlpersona_arriendo, persona_arriendo);
  }

  getPersona_arriendoId(id:number){
    return this.http.get<Persona_arriendo>(this.Urlpersona_arriendo+"/"+id);
  }

  updatePersona_arriendo(persona_arriendo:Persona_arriendo){
    return this.http.put<Persona_arriendo>(this.Urlpersona_arriendo+"/"+persona_arriendo.id_persona_arriendo, persona_arriendo);
  }

  deletePersona_arriendo(persona_arriendo:Persona_arriendo){
    return this.http.delete<Persona_arriendo>(this.Urlpersona_arriendo+"/"+persona_arriendo.id_persona_arriendo);
  }

  getArriendo(): Observable<Arriendo[]> {
    return this.http.get<Arriendo[]>(this.Urlarriendo);
  }

} 