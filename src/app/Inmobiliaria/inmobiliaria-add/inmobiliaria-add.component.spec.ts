import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariaAddComponent } from './inmobiliaria-add.component';

describe('InmobiliariaAddComponent', () => {
  let component: InmobiliariaAddComponent;
  let fixture: ComponentFixture<InmobiliariaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmobiliariaAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmobiliariaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
