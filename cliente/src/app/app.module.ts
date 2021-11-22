import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';
import { ListarSolicitudesComponent } from './components/listar-solicitudes/listar-solicitudes.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ListarSolicitudByIdComponent } from './components/listar-solicitud-by-id/listar-solicitud-by-id.component';
import { CrearReclamoComponent } from './components/crear-reclamo/crear-reclamo.component';


@NgModule({
  declarations: [
    AppComponent,
    CrearSolicitudComponent,
    ListarSolicitudesComponent,
    ListarSolicitudByIdComponent,
    CrearReclamoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
