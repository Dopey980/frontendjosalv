import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona_venta } from '../../Modelo/Persona_venta';
import { Venta } from '../../Modelo/Venta';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonaVentaserviceService {

  private Urlpersona_venta='http://localhost:8080/personas_ventas/submit';
  private Urlventa='http://localhost:8080/ventas/submit'

  constructor(private http:HttpClient) { }

  getPersona_venta(){
    return this.http.get<Persona_venta[]>(this.Urlpersona_venta);
  }

  createPersona_venta(persona_venta:Persona_venta){
    alert("Llegamos al servicio de Crear Persona...!!!" + persona_venta.id_persona_venta);
    return this.http.post<Persona_venta>(this.Urlpersona_venta, persona_venta);
  }

  getPersona_ventaId(id:number){
    return this.http.get<Persona_venta>(this.Urlpersona_venta+"/"+id);
  }

  updatePersona_venta(persona_venta:Persona_venta){
    return this.http.put<Persona_venta>(this.Urlpersona_venta+"/"+persona_venta.id_persona_venta, persona_venta);
  }

  deletePersona_venta(persona_compra:Persona_venta){
    return this.http.delete<Persona_venta>(this.Urlpersona_venta+"/"+persona_compra.id_persona_venta);
  }

  getVenta(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.Urlventa);
  }

}
