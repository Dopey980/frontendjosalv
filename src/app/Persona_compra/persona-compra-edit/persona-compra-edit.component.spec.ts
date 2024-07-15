import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCompraEditComponent } from './persona-compra-edit.component';

describe('PersonaCompraEditComponent', () => {
  let component: PersonaCompraEditComponent;
  let fixture: ComponentFixture<PersonaCompraEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaCompraEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaCompraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
