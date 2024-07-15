import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesEditComponent } from './inmuebles-edit.component';

describe('InmueblesEditComponent', () => {
  let component: InmueblesEditComponent;
  let fixture: ComponentFixture<InmueblesEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmueblesEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmueblesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
