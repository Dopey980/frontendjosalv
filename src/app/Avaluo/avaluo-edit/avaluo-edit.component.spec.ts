import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluoEditComponent } from './avaluo-edit.component';

describe('AvaluoEditComponent', () => {
  let component: AvaluoEditComponent;
  let fixture: ComponentFixture<AvaluoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaluoEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaluoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
