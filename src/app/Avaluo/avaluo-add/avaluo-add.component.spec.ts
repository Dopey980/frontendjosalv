import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvaluoAddComponent } from './avaluo-add.component';

describe('AvaluoAddComponent', () => {
  let component: AvaluoAddComponent;
  let fixture: ComponentFixture<AvaluoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AvaluoAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AvaluoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
