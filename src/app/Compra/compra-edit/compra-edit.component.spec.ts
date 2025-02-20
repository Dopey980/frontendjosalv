import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompraEditComponent } from './compra-edit.component';

describe('CompraEditComponent', () => {
  let component: CompraEditComponent;
  let fixture: ComponentFixture<CompraEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompraEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompraEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
