import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProyectoDetallesComponent } from './proyecto-detalles.component';

describe('ProyectoDetallesComponent', () => {
  let component: ProyectoDetallesComponent;
  let fixture: ComponentFixture<ProyectoDetallesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProyectoDetallesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProyectoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
