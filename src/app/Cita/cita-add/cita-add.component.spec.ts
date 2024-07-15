import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitaAddComponent } from './cita-add.component';

describe('CitaAddComponent', () => {
  let component: CitaAddComponent;
  let fixture: ComponentFixture<CitaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CitaAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CitaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
