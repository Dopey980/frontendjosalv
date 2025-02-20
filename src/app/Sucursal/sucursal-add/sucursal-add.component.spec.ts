import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SucursalAddComponent } from './sucursal-add.component';

describe('SucursalAddComponent', () => {
  let component: SucursalAddComponent;
  let fixture: ComponentFixture<SucursalAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SucursalAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SucursalAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
