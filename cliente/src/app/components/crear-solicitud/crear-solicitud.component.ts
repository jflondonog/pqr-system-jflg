import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitud } from 'src/app/models/solicitud';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-crear-solicitud',
  templateUrl: './crear-solicitud.component.html',
  styleUrls: ['./crear-solicitud.component.css']
})
export class CrearSolicitudComponent implements OnInit {
  solicitudForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _solicitudService: SolicitudService) { 
    this.solicitudForm = this.fb.group({
      type: ['', Validators.required],
      subject: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    
  }

  agregarSolicitud() {
    console.log(this.solicitudForm)

    const SOLICITUD: Solicitud = {
      user: "Juan Felipe Londoño Gaviria",
      date: new Date().toISOString().split('T')[0],
      details: {
        "solicitud" : {
          type: this.solicitudForm.get('type')?.value,
          subject: this.solicitudForm.get('subject')?.value,
          description: this.solicitudForm.get('description')?.value,
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
    console.log(SOLICITUD)

    this._solicitudService.guardarSolicitud(SOLICITUD).subscribe(data => {
      this.toastr.success('La solicitud fue registrada con éxito!', 'Solicitud registrada!');
      this.router.navigate(['/']);
    }, error => {
        console.log(error);
        this.solicitudForm.reset();
    })
  }
  
}
