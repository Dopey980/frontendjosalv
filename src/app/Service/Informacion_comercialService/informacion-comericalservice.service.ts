import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Informacion_comercial } from '../../Modelo/Informacion_comercial';
import { Observable } from 'rxjs';
import { Persona } from '../../Modelo/Persona';


@Injectable({
  providedIn: 'root'
})
export class InformacionComercialserviceService {

  private Urlinformacion_comercial='http://localhost:8080/informacion_comercial/submit';
  private Urlpersona='http://localhost:8080/personas/submit';

  constructor(private http:HttpClient) { }

  getInformacion_comercial(){
    return this.http.get<Informacion_comercial[]>(this.Urlinformacion_comercial);
  }

  createInformacion_comercial(informacion_comercial:Informacion_comercial){
    alert("Llegamos al servicio de Crear Persona...!!!" + informacion_comercial.id_informacion_comercial);
    return this.http.post<Informacion_comercial>(this.Urlinformacion_comercial, informacion_comercial);
  }

  getInformacion_comercialId(id:number){
    return this.http.get<Informacion_comercial>(this.Urlinformacion_comercial+"/"+id);
  }

  updateInformacion_comercial(informacion_comercial:Informacion_comercial){
    return this.http.put<Informacion_comercial>(this.Urlinformacion_comercial+"/"+informacion_comercial.id_informacion_comercial, informacion_comercial);
  }

  deleteInformacion_comercial(informacion_comercial:Informacion_comercial){
    return this.http.delete<Informacion_comercial>(this.Urlinformacion_comercial+"/"+informacion_comercial.id_informacion_comercial);
  }

  getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Urlpersona);
  }

} 