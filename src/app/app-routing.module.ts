import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { AnalisisDeRiesgoListarComponent } from './analisis_de_riesgo/analisis-de-riesgo-listar/analisis-de-riesgo-listar.component';
import { AnalisisDeRiesgoAddComponent } from './analisis_de_riesgo/analisis-de-riesgo-add/analisis-de-riesgo-add.component';
import { AnalisisDeRiesgoEditComponent } from './analisis_de_riesgo/analisis-de-riesgo-edit/analisis-de-riesgo-edit.component';
import { ArriendoListarComponent } from './Arriendo/arriendo-listar/arriendo-listar.component';
import { ArriendoAddComponent } from './Arriendo/arriendo-add/arriendo-add.component';
import { ArriendoEditComponent } from './Arriendo/arriendo-edit/arriendo-edit.component';
import { AvaluoListarComponent } from './Avaluo/avaluo-listar/avaluo-listar.component';
import { AvaluoAddComponent } from './Avaluo/avaluo-add/avaluo-add.component';
import { AvaluoEditComponent } from './Avaluo/avaluo-edit/avaluo-edit.component';
import { CitaListarComponent } from './Cita/cita-listar/cita-listar.component';
import { CitaAddComponent } from './Cita/cita-add/cita-add.component';
import { CitaEditComponent } from './Cita/cita-edit/cita-edit.component';
import { InformacionComercialListarComponent } from './Informacion_comercial/informacion-comercial-listar/informacion-comercial-listar.component';
import { InformacionComercialEditComponent } from './Informacion_comercial/informacion-comercial-edit/informacion-comercial-edit.component';
import { InformacionComercialAddComponent } from './Informacion_comercial/informacion-comercial-add/informacion-comercial-add.component';
import { PagoPorComisionListarComponent } from './Pago_por_comision/pago-por-comision-listar/pago-por-comision-listar.component';
import { PagoPorComisionEditComponent } from './Pago_por_comision/pago-por-comision-edit/pago-por-comision-edit.component';
import { PagoPorComisionAddComponent } from './Pago_por_comision/pago-por-comision-add/pago-por-comision-add.component';
import { PagoPorEstudioListarComponent } from './Pago_por_estudio/pago-por-estudio-listar/pago-por-estudio-listar.component';
import { PagoPorEstudioEditComponent } from './Pago_por_estudio/pago-por-estudio-edit/pago-por-estudio-edit.component';
import { PagoPorEstudioAddComponent } from './Pago_por_estudio/pago-por-estudio-add/pago-por-estudio-add.component';
import { PersonaArriendoListarComponent } from './Persona_arriendo/persona-arriendo-listar/persona-arriendo-listar.component';
import { PersonaArriendoAddComponent } from './Persona_arriendo/persona-arriendo-add/persona-arriendo-add.component';
import { PersonaArriendoEditComponent } from './Persona_arriendo/persona-arriendo-edit/persona-arriendo-edit.component';
import { PersonaCompraListarComponent } from './Persona_compra/persona-compra-listar/persona-compra-listar.component';
import { PersonaCompraAddComponent } from './Persona_compra/persona-compra-add/persona-compra-add.component';
import { PersonaCompraEditComponent } from './Persona_compra/persona-compra-edit/persona-compra-edit.component';
import { PersonaVentaListarComponent } from './Persona_venta/persona-venta-listar/persona-venta-listar.component';
import { PersonaVentaAddComponent } from './Persona_venta/persona-venta-add/persona-venta-add.component';
import { PersonaVentaEditComponent } from './Persona_venta/persona-venta-edit/persona-venta-edit.component';
import { SucursalListarComponent } from './Sucursal/sucursal-listar/sucursal-listar.component';
import { SucursalAddComponent } from './Sucursal/sucursal-add/sucursal-add.component';
import { SucursalEditComponent } from './Sucursal/sucursal-edit/sucursal-edit.component';
import { CompraListarComponent } from './Compra/compra-listar/compra-listar.component';
import { CompraAddComponent } from './Compra/compra-add/compra-add.component';
import { CompraEditComponent } from './Compra/compra-edit/compra-edit.component';
import { CuentaDeCobroListarComponent } from './Cuenta_de_cobro/cuenta-de-cobro-listar/cuenta-de-cobro-listar.component';
import { CuentaDeCobroAddComponent } from './Cuenta_de_cobro/cuenta-de-cobro-add/cuenta-de-cobro-add.component';
import { CuentaDeCobroEditComponent } from './Cuenta_de_cobro/cuenta-de-cobro-edit/cuenta-de-cobro-edit.component';
import { InmobiliariaListarComponent } from './Inmobiliaria/inmobiliaria-listar/inmobiliaria-listar.component';
import { InmobiliariaAddComponent } from './Inmobiliaria/inmobiliaria-add/inmobiliaria-add.component';
import { InmobiliariaEditComponent } from './Inmobiliaria/inmobiliaria-edit/inmobiliaria-edit.component';
import { InmueblesListarComponent } from './Inmueble/inmuebles-listar/inmuebles-listar.component';
import { InmueblesAddComponent } from './Inmueble/inmuebles-add/inmuebles-add.component';
import { InmueblesEditComponent } from './Inmueble/inmuebles-edit/inmuebles-edit.component';

//los imports de las rutas de la pagina
import { InicioComponent } from '../app/pages/inicio/inicio.component';



const routes: Routes = [
  {path: 'listar', component:ListarComponent},
  {path: 'add', component:AddComponent},
  {path: 'edit', component:EditComponent},
  {path: 'analisis-de-riesgo-listar', component:AnalisisDeRiesgoListarComponent},
  {path: 'analisis-de-riesgo-add', component:AnalisisDeRiesgoAddComponent},
  {path: 'analisis-de-riesgo-edit', component:AnalisisDeRiesgoEditComponent},
  {path: 'arriendo-listar', component:ArriendoListarComponent},
  {path: 'arriendo-add', component:ArriendoAddComponent},
  {path: 'arriendo-edit', component:ArriendoEditComponent},
  {path: 'avaluo-listar', component:AvaluoListarComponent},
  {path: 'avaluo-add', component:AvaluoAddComponent},
  {path: 'avaluo-edit', component:AvaluoEditComponent},
  {path: 'cita-listar', component:CitaListarComponent},
  {path: 'cita-add', component:CitaAddComponent},
  {path: 'cita-edit', component:CitaEditComponent},
  {path: 'informacion-comercial-listar', component:InformacionComercialListarComponent},
  {path: 'informacion-comercial-add', component:InformacionComercialAddComponent},
  {path: 'informacion-comercial-edit', component:InformacionComercialEditComponent},
  {path: 'pago-por-comision-listar', component:PagoPorComisionListarComponent},
  {path: 'pago-por-comision-add', component:PagoPorComisionAddComponent},
  {path: 'pago-por-comision-edit', component:PagoPorComisionEditComponent},
  {path: 'pago-por-estudio-listar', component:PagoPorEstudioListarComponent},
  {path: 'pago-por-estudio-add', component:PagoPorEstudioAddComponent},
  {path: 'pago-por-estudio-edit', component:PagoPorEstudioEditComponent},
  {path: 'persona-arriendo-listar', component:PersonaArriendoListarComponent},
  {path: 'persona-arriendo-add', component:PersonaArriendoAddComponent},
  {path: 'persona-arriendo-edit', component:PersonaArriendoEditComponent},
  {path: 'persona-compra-listar', component:PersonaCompraListarComponent},
  {path: 'persona-compra-add', component:PersonaCompraAddComponent},
  {path: 'persona-compra-edit', component:PersonaCompraEditComponent},
  {path: 'persona-venta-listar', component:PersonaVentaListarComponent},
  {path: 'persona-venta-add', component:PersonaVentaAddComponent},
  {path: 'persona-venta-edit', component:PersonaVentaEditComponent},
  {path: 'sucursal-listar', component:SucursalListarComponent},
  {path: 'sucursal-add', component:SucursalAddComponent},
  {path: 'sucursal-edit', component:SucursalEditComponent},
  {path: 'compra-listar', component:CompraListarComponent},
  {path: 'compra-add', component:CompraAddComponent},
  {path: 'compra-edit', component:CompraEditComponent},
  {path: 'compra-listar', component:CompraListarComponent},
  {path: 'compra-add', component:CompraAddComponent},
  {path: 'compra-edit', component:CompraEditComponent},
  {path: 'cuenta-de-cobro-listar', component:CuentaDeCobroListarComponent},
  {path: 'cuenta-de-cobro-add', component:CuentaDeCobroAddComponent},
  {path: 'cuenta-de-cobro-edit', component:CuentaDeCobroEditComponent},
  {path: 'inmobiliaria-listar', component:InmobiliariaListarComponent},
  {path: 'inmobiliaria-add', component:InmobiliariaAddComponent},
  {path: 'inmobiliaria-edit', component:InmobiliariaEditComponent},
  {path: 'inmuebles-listar', component:InmueblesListarComponent},
  {path: 'inmuebles-add', component:InmueblesAddComponent},
  {path: 'inmuebles-edit', component:InmueblesEditComponent},

  //Hago las rutas de la pagina
  {path: 'inicio', component:InicioComponent},




  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
