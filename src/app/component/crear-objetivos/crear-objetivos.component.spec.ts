import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearObjetivosComponent } from './crear-objetivos.component';

describe('CrearObjetivosComponent', () => {
  let component: CrearObjetivosComponent;
  let fixture: ComponentFixture<CrearObjetivosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearObjetivosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearObjetivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
