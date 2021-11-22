import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Solicitud } from '../models/solicitud';

@Injectable({
  providedIn: 'root'
})


export class SolicitudService {
  url = 'http://localhost:4000/api/solicitudes/'
  constructor(private http: HttpClient) { }

  getSolicitudes(): Observable<any> {
    return this.http.get(this.url);
  }

  guardarSolicitud(solicitud: Solicitud): Observable<any> {
    return this.http.post(this.url, solicitud);
  }

  obtenerSolicitud(id: string): Observable<any> {
    return this.http.get(this.url+id);
  }

  actualizarSatisfaccion(id : string, ls : boolean) : Observable<any> {
    return this.http.put(this.url+"satisfacion/"+id, {isSatisfied: ls})
  }

  actualizarReclamo(id: string, subjectR: string, descriptionR: string): Observable<any> {
    return this.http.put(this.url+"reclamar/"+id, {subject: subjectR, description: descriptionR})
  }
}
