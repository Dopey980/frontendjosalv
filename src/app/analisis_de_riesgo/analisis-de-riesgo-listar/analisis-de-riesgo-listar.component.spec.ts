import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisDeRiesgoListarComponent } from './analisis-de-riesgo-listar.component';

describe('AnalisisDeRiesgoListarComponent', () => {
  let component: AnalisisDeRiesgoListarComponent;
  let fixture: ComponentFixture<AnalisisDeRiesgoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisDeRiesgoListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisDeRiesgoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
