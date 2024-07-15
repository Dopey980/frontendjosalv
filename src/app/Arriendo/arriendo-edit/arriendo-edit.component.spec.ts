import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoEditComponent } from './arriendo-edit.component';

describe('ArriendoEditComponent', () => {
  let component: ArriendoEditComponent;
  let fixture: ComponentFixture<ArriendoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArriendoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArriendoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
