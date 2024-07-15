import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariaEditComponent } from './inmobiliaria-edit.component';

describe('InmobiliariaEditComponent', () => {
  let component: InmobiliariaEditComponent;
  let fixture: ComponentFixture<InmobiliariaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmobiliariaEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmobiliariaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
