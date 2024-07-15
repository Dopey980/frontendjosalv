import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pago_por_comision } from '../../Modelo/Pago_por_comision';
import { Persona } from '../../Modelo/Persona';
import { Observable } from 'rxjs';
import { Venta } from '../../Modelo/Venta';


@Injectable({
  providedIn: 'root'
})
export class PagoPorComisionserviceService {

  private Urlpago_por_comision='http://localhost:8080/pagos_por_comisiones/submit';
  private Urlpersona='http://localhost:8080/personas/submit';
  private Urlventa='http://localhost:8080/ventas/submit';


  constructor(private http:HttpClient) { }

  getPago_por_comision(){
    return this.http.get<Pago_por_comision[]>(this.Urlpago_por_comision);
  }

  createPago_por_comision(pago_por_comision:Pago_por_comision){
    alert("Llegamos al servicio de Crear Persona...!!!" + pago_por_comision.id_pago_por_comision);
    return this.http.post<Pago_por_comision>(this.Urlpago_por_comision, pago_por_comision);
  }

  getPago_por_comisionId(id:number){
    return this.http.get<Pago_por_comision>(this.Urlpago_por_comision+"/"+id);
  }

  updatePago_por_comision(pago_por_comision:Pago_por_comision){
    return this.http.put<Pago_por_comision>(this.Urlpago_por_comision+"/"+pago_por_comision.id_pago_por_comision, pago_por_comision);
  }

  deletePago_por_comision(pago_por_comision:Pago_por_comision){
    return this.http.delete<Pago_por_comision>(this.Urlpago_por_comision+"/"+pago_por_comision.id_pago_por_comision);
  }

  getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Urlpersona);
  }

  getVenta(): Observable<Venta[]> {
    return this.http.get<Venta[]>(this.Urlventa);
  }

} 