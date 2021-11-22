import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-listar-solicitud-by-id',
  templateUrl: './listar-solicitud-by-id.component.html',
  styleUrls: ['./listar-solicitud-by-id.component.css']
})
export class ListarSolicitudByIdComponent implements OnInit {
  dias: boolean = false;
  boton: boolean = false;
  sol : Solicitud = {
    user: "Juan Felipe Londoño Gaviria",
      date: new Date().toISOString().split('T')[0],
      details: {
        "solicitud" : {
          type: '',
          subject: '',
          description: '',
          status: false,
        },
        "reply" : {
          description: '',
          
        },
        isSatisfied: null
      },
      claim: {
        "claim": {
          subject: '',
          description: '',
          status: false,
        },
        "reply" : {
          description: '',
        }
      }
    }
  

  id : string | null;
  constructor(private _solicitudService: SolicitudService, private aRouter: ActivatedRoute) { 
    this.id = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.obtenerProducto(this.id);
  }

  obtenerProducto(id:any) {
    this._solicitudService.obtenerSolicitud(id)?.subscribe(data => {

      this.sol = data;
      let fechaCreacion = new Date(data.date);
      let fechaActual = new Date(new Date());

      let diff = fechaActual.getDate() - fechaCreacion.getDate();

      if(diff>=5){
        this.dias = true;
      }


      console.log(this.sol.details.isSatisfied)
      if(this.sol.details.isSatisfied == true || this.sol.details.isSatisfied == null || this.dias == true || this.sol.claim.claim.description != "") {
        this.boton = true;
      } else if(this.sol.details.isSatisfied == false) {
        this.boton = false;
      }

      
      console.log(this.boton)
    })
  }

  actualizarSatisfaccion(id: any, ls: boolean) {
    this._solicitudService.actualizarSatisfaccion(id, ls).subscribe(data => {
      console.log(data);
      this.obtenerProducto(id);
    })
  }
}

