import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArriendoListarComponent } from './arriendo-listar.component';

describe('ArriendoListarComponent', () => {
  let component: ArriendoListarComponent;
  let fixture: ComponentFixture<ArriendoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArriendoListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArriendoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
