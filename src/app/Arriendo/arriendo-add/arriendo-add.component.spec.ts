import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoAddComponent } from './arriendo-add.component';

describe('ArriendoAddComponent', () => {
  let component: ArriendoAddComponent;
  let fixture: ComponentFixture<ArriendoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArriendoAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArriendoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
