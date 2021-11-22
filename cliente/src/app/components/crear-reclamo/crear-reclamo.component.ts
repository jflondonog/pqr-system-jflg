import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Solicitud } from 'src/app/models/solicitud';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-crear-reclamo',
  templateUrl: './crear-reclamo.component.html',
  styleUrls: ['./crear-reclamo.component.css']
})
export class CrearReclamoComponent implements OnInit {
  reclamoForm: FormGroup;
  id_s : string | null;
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

  constructor(private fb: FormBuilder, private router: Router, private toastr: ToastrService, private _solicitudService: SolicitudService, private aRouter: ActivatedRoute) { 
    this.reclamoForm = this.fb.group({
      subject: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.id_s = this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
  }
  
  createClaim(id: any){
    this._solicitudService.actualizarReclamo(id, this.reclamoForm.get('subject')?.value, this.reclamoForm.get('description')?.value).subscribe(data => {
      console.log(data);
      console.log(id)
      this.toastr.success('El reclamo fue registrado con éxito!', 'Reclamo registrado!');
      this.router.navigate(['/ver-solicitud/'+id]);
    })
    console.log(this.reclamoForm.get('subject')?.value);
    console.log(this.reclamoForm.get('description')?.value);
  }
}
