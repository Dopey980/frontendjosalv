import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPorEstudioAddComponent } from './pago-por-estudio-add.component';

describe('PagoPorEstudioAddComponent', () => {
  let component: PagoPorEstudioAddComponent;
  let fixture: ComponentFixture<PagoPorEstudioAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoPorEstudioAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoPorEstudioAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
