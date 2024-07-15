import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Avaluo } from '../../Modelo/Avaluo';
import { Observable } from 'rxjs';
import { Inmueble } from '../../Modelo/Inmueble';


@Injectable({
  providedIn: 'root'
})
export class AvaluoserviceService {

  private Urlavaluo='http://localhost:8080/avaluos/submit';
  private Urlinmueble = 'http://localhost:8080/inmuebles/submit';

  constructor(private http:HttpClient) { }

  getAvaluos(){
    return this.http.get<Avaluo[]>(this.Urlavaluo);
  }

  createAvaluo(avaluo:Avaluo){
    alert("Llegamos al servicio de Crear Persona...!!!" + avaluo.id_avaluo);
    return this.http.post<Avaluo>(this.Urlavaluo, avaluo);
  }

  getAvaluoId(id:number){
    return this.http.get<Avaluo>(this.Urlavaluo+"/"+id);
  }

  updateAvaluo(avaluo:Avaluo){
    return this.http.put<Avaluo>(this.Urlavaluo+"/"+avaluo.id_avaluo, avaluo);
  }

  deleteAvaluo(avaluo:Avaluo){
    return this.http.delete<Avaluo>(this.Urlavaluo+"/"+avaluo.id_avaluo);
  }

  getInmueble(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.Urlinmueble);
  }

} 