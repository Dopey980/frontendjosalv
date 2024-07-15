import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListarComponent } from './Persona/listar/listar.component';
import { AddComponent } from './Persona/add/add.component';
import { EditComponent } from './Persona/edit/edit.component';
import { ServiceService } from './Service/PersonaService/service.service';
import { AnalisisDeRiesgoListarComponent } from './analisis_de_riesgo/analisis-de-riesgo-listar/analisis-de-riesgo-listar.component';
import { AnalisisDeRiesgoEditComponent } from './analisis_de_riesgo/analisis-de-riesgo-edit/analisis-de-riesgo-edit.component';
import { AnalisisDeRiesgoAddComponent } from './analisis_de_riesgo/analisis-de-riesgo-add/analisis-de-riesgo-add.component';
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
import { InformacionComercialAddComponent } from './Informacion_comercial/informacion-comercial-add/informacion-comercial-add.component';
import { InformacionComercialEditComponent } from './Informacion_comercial/informacion-comercial-edit/informacion-comercial-edit.component';
import { PagoPorComisionListarComponent } from './Pago_por_comision/pago-por-comision-listar/pago-por-comision-listar.component';
import { PagoPorComisionEditComponent } from './Pago_por_comision/pago-por-comision-edit/pago-por-comision-edit.component';
import { PagoPorComisionAddComponent } from './Pago_por_comision/pago-por-comision-add/pago-por-comision-add.component';
import { PagoPorEstudioListarComponent } from './Pago_por_estudio/pago-por-estudio-listar/pago-por-estudio-listar.component';
import { PagoPorEstudioAddComponent } from './Pago_por_estudio/pago-por-estudio-add/pago-por-estudio-add.component';
import { PagoPorEstudioEditComponent } from './Pago_por_estudio/pago-por-estudio-edit/pago-por-estudio-edit.component';
import { PersonaArriendoListarComponent } from './Persona_arriendo/persona-arriendo-listar/persona-arriendo-listar.component';
import { PersonaArriendoEditComponent } from './Persona_arriendo/persona-arriendo-edit/persona-arriendo-edit.component';
import { PersonaArriendoAddComponent } from './Persona_arriendo/persona-arriendo-add/persona-arriendo-add.component';
import { PersonaCompraListarComponent } from './Persona_compra/persona-compra-listar/persona-compra-listar.component';
import { PersonaCompraAddComponent } from './Persona_compra/persona-compra-add/persona-compra-add.component';
import { PersonaCompraEditComponent } from './Persona_compra/persona-compra-edit/persona-compra-edit.component';
import { PersonaVentaListarComponent } from './Persona_venta/persona-venta-listar/persona-venta-listar.component';
import { PersonaVentaEditComponent } from './Persona_venta/persona-venta-edit/persona-venta-edit.component';
import { PersonaVentaAddComponent } from './Persona_venta/persona-venta-add/persona-venta-add.component';
import { SucursalListarComponent } from './Sucursal/sucursal-listar/sucursal-listar.component';
import { SucursalEditComponent } from './Sucursal/sucursal-edit/sucursal-edit.component';
import { SucursalAddComponent } from './Sucursal/sucursal-add/sucursal-add.component';
import { CompraListarComponent } from './Compra/compra-listar/compra-listar.component';
import { CompraEditComponent } from './Compra/compra-edit/compra-edit.component';
import { CompraAddComponent } from './Compra/compra-add/compra-add.component';
import { CuentaDeCobroListarComponent } from './Cuenta_de_cobro/cuenta-de-cobro-listar/cuenta-de-cobro-listar.component';
import { CuentaDeCobroEditComponent } from './Cuenta_de_cobro/cuenta-de-cobro-edit/cuenta-de-cobro-edit.component';
import { CuentaDeCobroAddComponent } from './Cuenta_de_cobro/cuenta-de-cobro-add/cuenta-de-cobro-add.component';
import { InmobiliariaListarComponent } from './Inmobiliaria/inmobiliaria-listar/inmobiliaria-listar.component';
import { InmobiliariaEditComponent } from './Inmobiliaria/inmobiliaria-edit/inmobiliaria-edit.component';
import { InmobiliariaAddComponent } from './Inmobiliaria/inmobiliaria-add/inmobiliaria-add.component';
import { InmueblesListarComponent } from './Inmueble/inmuebles-listar/inmuebles-listar.component';
import { InmueblesAddComponent } from './Inmueble/inmuebles-add/inmuebles-add.component';
import { InmueblesEditComponent } from './Inmueble/inmuebles-edit/inmuebles-edit.component';

import { FooterComponent } from '../components/footer/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { InicioComponent } from '../app/pages/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AddComponent,
    EditComponent,
    AnalisisDeRiesgoListarComponent,
    AnalisisDeRiesgoEditComponent,
    AnalisisDeRiesgoAddComponent,
    ArriendoListarComponent,
    ArriendoAddComponent,
    ArriendoEditComponent,
    AvaluoListarComponent,
    AvaluoAddComponent,
    AvaluoEditComponent,
    CitaListarComponent,
    CitaAddComponent,
    CitaEditComponent,
    InformacionComercialListarComponent,
    InformacionComercialAddComponent,
    InformacionComercialEditComponent,
    PagoPorComisionListarComponent,
    PagoPorComisionEditComponent,
    PagoPorComisionAddComponent,
    PagoPorEstudioListarComponent,
    PagoPorEstudioAddComponent,
    PagoPorEstudioEditComponent,
    PersonaArriendoListarComponent,
    PersonaArriendoEditComponent,
    PersonaArriendoAddComponent,
    PersonaCompraListarComponent,
    PersonaCompraAddComponent,
    PersonaCompraEditComponent,
    PersonaVentaListarComponent,
    PersonaVentaEditComponent,
    PersonaVentaAddComponent,
    SucursalListarComponent,
    SucursalEditComponent,
    SucursalAddComponent,
    CompraListarComponent,
    CompraEditComponent,
    CompraAddComponent,
    CuentaDeCobroListarComponent,
    CuentaDeCobroEditComponent,
    CuentaDeCobroAddComponent,
    InmobiliariaListarComponent,
    InmobiliariaEditComponent,
    InmobiliariaAddComponent,
    InmueblesListarComponent,
    InmueblesAddComponent,
    InmueblesEditComponent,

    FooterComponent,
    HeaderComponent,
    InicioComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
