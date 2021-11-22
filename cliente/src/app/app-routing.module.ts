import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearReclamoComponent } from './components/crear-reclamo/crear-reclamo.component';
import { CrearSolicitudComponent } from './components/crear-solicitud/crear-solicitud.component';
import { ListarSolicitudByIdComponent } from './components/listar-solicitud-by-id/listar-solicitud-by-id.component';

//COMPONENTES
import { ListarSolicitudesComponent } from './components/listar-solicitudes/listar-solicitudes.component';

const routes: Routes = [
  { path: '', component: ListarSolicitudesComponent},
  { path: 'crear-solicitud', component: CrearSolicitudComponent},
  { path: 'ver-solicitud/:id', component: ListarSolicitudByIdComponent},
  { path: 'crear-reclamo/:id', component: CrearReclamoComponent},
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
