import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaVentaEditComponent } from './persona-venta-edit.component';

describe('PersonaVentaEditComponent', () => {
  let component: PersonaVentaEditComponent;
  let fixture: ComponentFixture<PersonaVentaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaVentaEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaVentaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
