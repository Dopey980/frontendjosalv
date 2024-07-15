import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaDeCobroAddComponent } from './cuenta-de-cobro-add.component';

describe('CuentaDeCobroAddComponent', () => {
  let component: CuentaDeCobroAddComponent;
  let fixture: ComponentFixture<CuentaDeCobroAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CuentaDeCobroAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuentaDeCobroAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
