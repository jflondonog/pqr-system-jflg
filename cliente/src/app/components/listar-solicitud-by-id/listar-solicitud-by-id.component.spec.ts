import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSolicitudByIdComponent } from './listar-solicitud-by-id.component';

describe('ListarSolicitudByIdComponent', () => {
  let component: ListarSolicitudByIdComponent;
  let fixture: ComponentFixture<ListarSolicitudByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarSolicitudByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSolicitudByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
