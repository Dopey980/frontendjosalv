import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisDeRiesgoAddComponent } from './analisis-de-riesgo-add.component';

describe('AnalisisDeRiesgoAddComponent', () => {
  let component: AnalisisDeRiesgoAddComponent;
  let fixture: ComponentFixture<AnalisisDeRiesgoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisDeRiesgoAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisDeRiesgoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
