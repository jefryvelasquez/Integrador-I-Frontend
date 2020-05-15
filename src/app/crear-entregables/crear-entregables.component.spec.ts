import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearEntregablesComponent } from './crear-entregables.component';

describe('CrearEntregablesComponent', () => {
  let component: CrearEntregablesComponent;
  let fixture: ComponentFixture<CrearEntregablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearEntregablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearEntregablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
