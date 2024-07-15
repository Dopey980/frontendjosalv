import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Arriendo } from '../../Modelo/Arriendo';
import { Inmueble } from '../../Modelo/Inmueble';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private Urlarriendo='http://localhost:8080/arriendos/submit';
  private Urlinmueble = 'http://localhost:8080/inmuebles/submit';

  constructor(private http:HttpClient) { }

  getArriendos(){
    return this.http.get<Arriendo[]>(this.Urlarriendo);
  }

  createArriendo(arriendo:Arriendo){
    alert("Llegamos al servicio de Crear Persona...!!!" + arriendo.id_arriendo);
    return this.http.post<Arriendo>(this.Urlarriendo, arriendo);
  }

  getArriendoId(id:number){
    return this.http.get<Arriendo>(this.Urlarriendo+"/"+id);
  }

  updateArriendo(arriendo:Arriendo){
    return this.http.put<Arriendo>(this.Urlarriendo+"/"+arriendo.id_arriendo, arriendo);
  }

  deleteArriendo(arriendo:Arriendo){
    return this.http.delete<Arriendo>(this.Urlarriendo+"/"+arriendo.id_arriendo);
  }

  getInmueble(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.Urlinmueble);
  }

} 
