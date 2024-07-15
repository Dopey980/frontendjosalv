import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmueblesListarComponent } from './inmuebles-listar.component';

describe('InmueblesListarComponent', () => {
  let component: InmueblesListarComponent;
  let fixture: ComponentFixture<InmueblesListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmueblesListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmueblesListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
