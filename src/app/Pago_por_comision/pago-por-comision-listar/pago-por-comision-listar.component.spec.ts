import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPorComisionListarComponent } from './pago-por-comision-listar.component';

describe('PagoPorComisionListarComponent', () => {
  let component: PagoPorComisionListarComponent;
  let fixture: ComponentFixture<PagoPorComisionListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoPorComisionListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoPorComisionListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
