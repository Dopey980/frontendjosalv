import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonaArriendoAddComponent } from './persona-arriendo-add.component';

describe('PersonaArriendoAddComponent', () => {
  let component: PersonaArriendoAddComponent;
  let fixture: ComponentFixture<PersonaArriendoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PersonaArriendoAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PersonaArriendoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
