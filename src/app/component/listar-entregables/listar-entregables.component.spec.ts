import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarEntregablesComponent } from './listar-entregables.component';

describe('ListarEntregablesComponent', () => {
  let component: ListarEntregablesComponent;
  let fixture: ComponentFixture<ListarEntregablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarEntregablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarEntregablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
