import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalEditComponent } from './sucursal-edit.component';

describe('SucursalEditComponent', () => {
  let component: SucursalEditComponent;
  let fixture: ComponentFixture<SucursalEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucursalEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucursalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
