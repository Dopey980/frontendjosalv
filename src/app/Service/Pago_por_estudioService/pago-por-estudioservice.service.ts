import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pago_por_estudio } from '../../Modelo/Pago_por_estudio';
import { Persona } from '../../Modelo/Persona';
import { Inmueble } from '../../Modelo/Inmueble';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PagoPorEstudioserviceService {

  private Urlpago_por_estudio='http://localhost:8080/pagos_por_estudio/submit';
  private Urlinmueble='http://localhost:8080/inmuebles/submit';
  private Urlpersona='http://localhost:8080/personas/submit';

  constructor(private http:HttpClient) { }

  getPago_por_estudio(){
    return this.http.get<Pago_por_estudio[]>(this.Urlpago_por_estudio);
  }

  createPago_por_estudio(pago_por_estudio:Pago_por_estudio){
    alert("Llegamos al servicio de Crear Persona...!!!" + pago_por_estudio.id_pago_por_estudio);
    return this.http.post<Pago_por_estudio>(this.Urlpago_por_estudio, pago_por_estudio);
  }

  getPago_por_estudioId(id:number){
    return this.http.get<Pago_por_estudio>(this.Urlpago_por_estudio+"/"+id);
  }

  updatePago_por_estudio(pago_por_estudio:Pago_por_estudio){
    return this.http.put<Pago_por_estudio>(this.Urlpago_por_estudio+"/"+pago_por_estudio.id_pago_por_estudio, pago_por_estudio);
  }

  deletePago_por_estudio(pago_por_estudio:Pago_por_estudio){
    return this.http.delete<Pago_por_estudio>(this.Urlpago_por_estudio+"/"+pago_por_estudio.id_pago_por_estudio);
  }

  getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Urlpersona);
  }

  getInmueble(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.Urlinmueble);
  }

} 