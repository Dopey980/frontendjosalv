import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaVentaAddComponent } from './persona-venta-add.component';

describe('PersonaVentaAddComponent', () => {
  let component: PersonaVentaAddComponent;
  let fixture: ComponentFixture<PersonaVentaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaVentaAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaVentaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
