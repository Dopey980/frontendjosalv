import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaDeCobroListarComponent } from './cuenta-de-cobro-listar.component';

describe('CuentaDeCobroListarComponent', () => {
  let component: CuentaDeCobroListarComponent;
  let fixture: ComponentFixture<CuentaDeCobroListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuentaDeCobroListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuentaDeCobroListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
