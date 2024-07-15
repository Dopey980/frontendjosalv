import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionComercialListarComponent } from './informacion-comercial-listar.component';

describe('InformacionComercialListarComponent', () => {
  let component: InformacionComercialListarComponent;
  let fixture: ComponentFixture<InformacionComercialListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionComercialListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionComercialListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
