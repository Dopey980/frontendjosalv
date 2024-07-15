import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Compra } from '../../Modelo/Compra';
import { Persona_compra } from '../../Modelo/Persona_compra';
import { Observable } from 'rxjs';
import { Inmueble } from '../../Modelo/Inmueble';

@Injectable({
  providedIn: 'root'
})
export class CompraServiceService {
  
  private Urlcompra='http://localhost:8080/compras/submit';
  private Urlpersona='http://localhost:8080/personas_compras/submit';
  private Urlinmueble='http://localhost:8080/inmuebles/submit';


  constructor(private http:HttpClient) { }

  getCompra(){
    return this.http.get<Compra[]>(this.Urlcompra);
  }

  createCompra(compra:Compra){
    alert("Llegamos al servicio de Crear Persona...!!!" + compra.id_compra);
    return this.http.post<Compra>(this.Urlcompra, compra);
  }

  getCompraId(id:number){
    return this.http.get<Compra>(this.Urlcompra+"/"+id);
  }

  updateCompra(compra:Compra){
    return this.http.put<Compra>(this.Urlcompra+"/"+compra.id_compra, compra);
  }

  deleteCompra(compra:Compra){
    return this.http.delete<Compra>(this.Urlcompra+"/"+compra.id_compra);
  }

  getPersona(): Observable<Persona_compra[]> {
    return this.http.get<Persona_compra[]>(this.Urlpersona);
  }

  getInmueble(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.Urlinmueble);
  }

}
