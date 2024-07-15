import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cita } from '../../Modelo/Cita';
import { Persona } from '../../Modelo/Persona';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CitaserviceService {

  private Urlcita='http://localhost:8080/citas/submit';
  private Urlpersona='http://localhost:8080/personas/submit';

  constructor(private http:HttpClient) { }

  getCitas(){
    return this.http.get<Cita[]>(this.Urlcita);
  }

  createCita(cita:Cita){
    alert("Llegamos al servicio de Crear Persona...!!!" + cita.id_cita);
    return this.http.post<Cita>(this.Urlcita, cita);
  }

  getCitaId(id:number){
    return this.http.get<Cita>(this.Urlcita+"/"+id);
  }

  updateCita(cita:Cita){
    return this.http.put<Cita>(this.Urlcita+"/"+cita.id_cita, cita);
  }

  deleteCita(cita:Cita){
    return this.http.delete<Cita>(this.Urlcita+"/"+cita.id_cita);
  }

  getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Urlpersona);
  }

} 
