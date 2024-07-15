import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCompraListarComponent } from './persona-compra-listar.component';

describe('PersonaCompraListarComponent', () => {
  let component: PersonaCompraListarComponent;
  let fixture: ComponentFixture<PersonaCompraListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaCompraListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaCompraListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
