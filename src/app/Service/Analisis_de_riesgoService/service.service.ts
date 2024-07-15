import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Analisis_de_riesgo } from '../../Modelo/Analisis_de_riesgo';
import { Inmueble } from '../../Modelo/Inmueble';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }


  private Urlanalisis_de_riesgo = 'http://localhost:8080/analisis_de_riesgo/submit';
  private Urlinmueble = 'http://localhost:8080/inmuebles/submit';

  getanalisis_de_riesgo() {
    return this.http.get<Analisis_de_riesgo[]>(this.Urlanalisis_de_riesgo);
  }

  createanalisis_de_riesgo(analisis_de_riesgo: Analisis_de_riesgo) {
    ;
    return this.http.post<Analisis_de_riesgo>(this.Urlanalisis_de_riesgo, analisis_de_riesgo);
  }

  getanalisis_de_riesgoId(id_analisis_de_riesgo: number) {
    return this.http.get<Analisis_de_riesgo>(this.Urlanalisis_de_riesgo + "/" + id_analisis_de_riesgo);
  }

  updateanalisis_de_riesgo(analisis_de_riesgo: Analisis_de_riesgo) {
    return this.http.put<Analisis_de_riesgo>(this.Urlanalisis_de_riesgo + "/" + analisis_de_riesgo.id_analisis_de_riesgo, analisis_de_riesgo);
  }

  deleteanalisis_de_riesgo(analisis_de_riesgo: Analisis_de_riesgo) {
    return this.http.delete<Analisis_de_riesgo>(this.Urlanalisis_de_riesgo + "/" + analisis_de_riesgo.id_analisis_de_riesgo);
  }

  getInmueble(): Observable<Inmueble[]> {
    return this.http.get<Inmueble[]>(this.Urlinmueble);
  }
}
