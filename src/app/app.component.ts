import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HolaAngular';

  constructor(private router:Router){}

  Listar(){
    this.router.navigate(["listar"]);
  }

  Nuevo(){
    this.router.navigate(["add"]);
  }

  ListarAnalisis_de_riesgo(){
    this.router.navigate(["analisis-de-riesgo-listar"]);
  }

  NuevoAnalisis_de_riesgo(){
    this.router.navigate(["analisis-de-riesgo-add"]);
  }

  ListarArriendo(){
    this.router.navigate(["arriendo-listar"]);
  }

  NuevoArriendo(){
    this.router.navigate(["arriendo-add"]);
  }

  ListarAvaluo(){
    this.router.navigate(["avaluo-listar"]);
  }

  NuevoAvaluo(){
    this.router.navigate(["avaluo-add"]);
  }
  
  ListarCita(){
    this.router.navigate(["cita-listar"]);
  }

  NuevoCita(){
    this.router.navigate(["cita-add"]);
  }

  ListarInformacion_comercial(){
    this.router.navigate(["informacion-comercial-listar"]);
  }

  NuevoInformacion_comercial(){
    this.router.navigate(["informacion-comercial-add"]);
  }

  ListarPago_por_comision(){
    this.router.navigate(["pago-por-comision-listar"]);
  }

  NuevoPago_por_comision(){
    this.router.navigate(["pago-por-comision-add"]);
  }

  ListarPago_por_estudio(){
    this.router.navigate(["pago-por-estudio-listar"]);
  }

  NuevoPago_por_estudio(){
    this.router.navigate(["pago-por-estudio-add"]);
  }

  ListarPersona_arriendo(){
    this.router.navigate(["persona-arriendo-listar"]);
  }

  NuevoPersona_arriendo(){
    this.router.navigate(["persona-arriendo-add"]);
  }

  ListarPersona_compra(){
    this.router.navigate(["persona-compra-listar"]);
  }

  NuevoPersona_compra(){
    this.router.navigate(["persona-compra-add"]);
  }

  ListarPersona_venta(){
    this.router.navigate(["persona-venta-listar"]);
  }

  NuevoPersona_venta(){
    this.router.navigate(["persona-venta-add"]);
  }

  ListarSucursal(){
    this.router.navigate(["sucursal-listar"]);
  }

  NuevoSucursal(){
    this.router.navigate(["sucursal-add"]);
  }

  ListarCompra(){
    this.router.navigate(["compra-listar"]);
  }

  NuevoCompra(){
    this.router.navigate(["compra-add"]);
  }

  ListarCuenta_de_cobro(){
    this.router.navigate(["cuenta-de-cobro-listar"]);
  }

  NuevoCuenta_de_cobro(){
    this.router.navigate(["cuenta-de-cobro-add"]);
  }

  ListarInmobiliaria(){
    this.router.navigate(["inmobiliaria-listar"]);
  }

  NuevoInmobiliaria(){
    this.router.navigate(["inmobiliaria-add"]);
  }

  ListarInmuebles(){
    this.router.navigate(["inmuebles-listar"]);
  }

  NuevoInmuebles(){
    this.router.navigate(["inmuebles-add"]);
  }

}
