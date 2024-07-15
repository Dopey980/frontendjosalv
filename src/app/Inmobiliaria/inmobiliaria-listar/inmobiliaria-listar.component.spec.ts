import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InmobiliariaListarComponent } from './inmobiliaria-listar.component';

describe('InmobiliariaListarComponent', () => {
  let component: InmobiliariaListarComponent;
  let fixture: ComponentFixture<InmobiliariaListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InmobiliariaListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InmobiliariaListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
