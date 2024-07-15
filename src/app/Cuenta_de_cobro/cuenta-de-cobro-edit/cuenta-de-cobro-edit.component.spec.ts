import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaDeCobroEditComponent } from './cuenta-de-cobro-edit.component';

describe('CuentaDeCobroEditComponent', () => {
  let component: CuentaDeCobroEditComponent;
  let fixture: ComponentFixture<CuentaDeCobroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuentaDeCobroEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuentaDeCobroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
