import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaArriendoEditComponent } from './persona-arriendo-edit.component';

describe('PersonaArriendoEditComponent', () => {
  let component: PersonaArriendoEditComponent;
  let fixture: ComponentFixture<PersonaArriendoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaArriendoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaArriendoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
