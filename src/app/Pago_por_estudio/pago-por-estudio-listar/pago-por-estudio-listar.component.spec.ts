import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPorEstudioListarComponent } from './pago-por-estudio-listar.component';

describe('PagoPorEstudioListarComponent', () => {
  let component: PagoPorEstudioListarComponent;
  let fixture: ComponentFixture<PagoPorEstudioListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoPorEstudioListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoPorEstudioListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
