import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Inmueble } from '../../Modelo/Inmueble';
import { Persona } from '../../Modelo/Persona';
import { Ubicacion_geo } from '../../Modelo/Ubicacion_geo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InmuebleServiceService {

  private Urlinmueble='http://localhost:8080/inmuebles/submit';
  private Urlpersona='http://localhost:8080/personas/submit';
  private Urlubicacion='http://localhost:8080/ubicacion_geo/submit';


  constructor(private http:HttpClient) { }

  getInmueble(){
    return this.http.get<Inmueble[]>(this.Urlinmueble);
  }

  createInmueble(inmueble:Inmueble){
    alert("Llegamos al servicio de Crear Persona...!!!" + inmueble.id_inmueble);
    return this.http.post<Inmueble>(this.Urlinmueble, inmueble);
  }

  getInmuebleId(id:number){
    return this.http.get<Inmueble>(this.Urlinmueble+"/"+id);
  }

  updateInmueble(inmueble:Inmueble){
    return this.http.put<Inmueble>(this.Urlinmueble+"/"+inmueble.id_inmueble, inmueble);
  }

  deleteInmueble(inmueble:Inmueble){
    return this.http.delete<Inmueble>(this.Urlinmueble+"/"+inmueble.id_inmueble);
  }

  getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Urlpersona);
  }

  getUbicacion(): Observable<Ubicacion_geo[]> {
    return this.http.get<Ubicacion_geo[]>(this.Urlubicacion);
  }
}
