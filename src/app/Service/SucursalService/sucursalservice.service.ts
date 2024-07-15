import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sucursal } from '../../Modelo/Sucursal';
import { Observable } from 'rxjs';
import { Ubicacion_geo } from '../../Modelo/Ubicacion_geo';
import { Inmobiliaria } from '../../Modelo/Inmobiliaria';

@Injectable({
  providedIn: 'root'
})
export class SucursalserviceService {

  private Urlpersona='http://localhost:8080/personas/submit';
  private Urlubicacion = 'http://localhost:8080/ubicacion_geo/submit';
  private Urlinmobiliaria = 'http://localhost:8080/inmobilirias/submit';

  constructor(private http:HttpClient) { }

  getSucursal(){
    return this.http.get<Sucursal[]>(this.Urlpersona);
  }

  createSucursal(sucursal:Sucursal){
    alert("Llegamos al servicio de Crear Persona...!!!" + sucursal.id_sucursal);
    return this.http.post<Sucursal>(this.Urlpersona, sucursal);
  }

  getSucursalId(id:number){
    return this.http.get<Sucursal>(this.Urlpersona+"/"+id);
  }

  updateSucursal(sucursal:Sucursal){
    return this.http.put<Sucursal>(this.Urlpersona+"/"+sucursal.id_sucursal, sucursal);
  }

  deleteSucursal(sucursal:Sucursal){
    return this.http.delete<Sucursal>(this.Urlpersona+"/"+sucursal.id_sucursal);
  }

  getUbicacion(): Observable<Ubicacion_geo[]> {
    return this.http.get<Ubicacion_geo[]>(this.Urlubicacion);
  }

  getInmobiliaria(): Observable<Inmobiliaria[]> {
    return this.http.get<Inmobiliaria[]>(this.Urlinmobiliaria);
  }



  
  
}
