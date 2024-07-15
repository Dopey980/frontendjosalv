import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaVentaListarComponent } from './persona-venta-listar.component';

describe('PersonaVentaListarComponent', () => {
  let component: PersonaVentaListarComponent;
  let fixture: ComponentFixture<PersonaVentaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaVentaListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaVentaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
