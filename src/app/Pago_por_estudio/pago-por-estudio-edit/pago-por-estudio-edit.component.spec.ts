import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPorEstudioEditComponent } from './pago-por-estudio-edit.component';

describe('PagoPorEstudioEditComponent', () => {
  let component: PagoPorEstudioEditComponent;
  let fixture: ComponentFixture<PagoPorEstudioEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoPorEstudioEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoPorEstudioEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
