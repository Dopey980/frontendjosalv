import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalisisDeRiesgoEditComponent } from './analisis-de-riesgo-edit.component';

describe('AnalisisDeRiesgoEditComponent', () => {
  let component: AnalisisDeRiesgoEditComponent;
  let fixture: ComponentFixture<AnalisisDeRiesgoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnalisisDeRiesgoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnalisisDeRiesgoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
