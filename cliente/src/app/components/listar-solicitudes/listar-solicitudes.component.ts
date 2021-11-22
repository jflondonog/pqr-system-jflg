import { Component, OnInit } from '@angular/core';
import { ObjectUnsubscribedError } from 'rxjs';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-listar-solicitudes',
  templateUrl: './listar-solicitudes.component.html',
  styleUrls: ['./listar-solicitudes.component.css']
})
export class ListarSolicitudesComponent implements OnInit {
  listSolicitudes: Solicitud[] = [];

  constructor(private _solicitudService: SolicitudService) { }

  ngOnInit(): void {
    this.obtenerSolicitudes();
  }

  obtenerSolicitudes() {
    this._solicitudService.getSolicitudes().subscribe(data => {
      console.log(data);
      this.listSolicitudes = data;
      console.log(this.listSolicitudes);
    }, error => {
      console.log(error);
    })
  }

}
