import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPorComisionEditComponent } from './pago-por-comision-edit.component';

describe('PagoPorComisionEditComponent', () => {
  let component: PagoPorComisionEditComponent;
  let fixture: ComponentFixture<PagoPorComisionEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoPorComisionEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoPorComisionEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
