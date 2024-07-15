import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaArriendoListarComponent } from './persona-arriendo-listar.component';

describe('PersonaArriendoListarComponent', () => {
  let component: PersonaArriendoListarComponent;
  let fixture: ComponentFixture<PersonaArriendoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaArriendoListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaArriendoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
