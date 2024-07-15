import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cuenta_de_cobro } from '../../Modelo/Cuenta_de_cobro';
import { Arriendo } from '../../Modelo/Arriendo';
import { Persona_arriendo } from '../../Modelo/Persona_arriendo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CuentaDeCobroServiceService {

  private Urlcuenta='http://localhost:8080/cuentas_de_cobro/submit';
  private Urlpersona='http://localhost:8080/personas_arriendos/submit';
  private Urlarriendo='http://localhost:8080/arriendos/submit';

  constructor(private http:HttpClient) { }

  getCuenta(){
    return this.http.get<Cuenta_de_cobro[]>(this.Urlcuenta);
  }

  createCuenta(cuenta:Cuenta_de_cobro){
    alert("Llegamos al servicio de Crear Persona...!!!" + cuenta.id_cuenta_de_cobro);
    return this.http.post<Cuenta_de_cobro>(this.Urlcuenta, cuenta);
  }

  getCuentaId(id:number){
    return this.http.get<Cuenta_de_cobro>(this.Urlcuenta+"/"+id);
  }

  getArriendo(): Observable<Arriendo[]> {
    return this.http.get<Arriendo[]>(this.Urlarriendo);
  }

  getInquilino(): Observable<Persona_arriendo[]> {
    return this.http.get<Persona_arriendo[]>(this.Urlpersona);
  }

  updateCuenta(cuenta:Cuenta_de_cobro){
    return this.http.put<Cuenta_de_cobro>(this.Urlcuenta+"/"+cuenta.id_cuenta_de_cobro, cuenta);
  }

  deleteCuenta(cuenta:Cuenta_de_cobro){
    return this.http.delete<Cuenta_de_cobro>(this.Urlcuenta+"/"+cuenta.id_cuenta_de_cobro);
  }

 

}
