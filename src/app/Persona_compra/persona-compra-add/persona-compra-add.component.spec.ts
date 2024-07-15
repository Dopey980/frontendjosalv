import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaCompraAddComponent } from './persona-compra-add.component';

describe('PersonaCompraAddComponent', () => {
  let component: PersonaCompraAddComponent;
  let fixture: ComponentFixture<PersonaCompraAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaCompraAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaCompraAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
