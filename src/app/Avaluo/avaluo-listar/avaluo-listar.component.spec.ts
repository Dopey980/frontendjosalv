import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluoListarComponent } from './avaluo-listar.component';

describe('AvaluoListarComponent', () => {
  let component: AvaluoListarComponent;
  let fixture: ComponentFixture<AvaluoListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaluoListarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaluoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
