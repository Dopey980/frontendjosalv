import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesAddComponent } from './inmuebles-add.component';

describe('InmueblesAddComponent', () => {
  let component: InmueblesAddComponent;
  let fixture: ComponentFixture<InmueblesAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmueblesAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmueblesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
