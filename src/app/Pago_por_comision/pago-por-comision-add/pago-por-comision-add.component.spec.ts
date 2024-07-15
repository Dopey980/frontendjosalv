import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagoPorComisionAddComponent } from './pago-por-comision-add.component';

describe('PagoPorComisionAddComponent', () => {
  let component: PagoPorComisionAddComponent;
  let fixture: ComponentFixture<PagoPorComisionAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PagoPorComisionAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PagoPorComisionAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
