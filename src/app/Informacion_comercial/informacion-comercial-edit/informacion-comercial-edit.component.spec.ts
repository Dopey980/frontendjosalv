import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionComercialEditComponent } from './informacion-comercial-edit.component';

describe('InformacionComercialEditComponent', () => {
  let component: InformacionComercialEditComponent;
  let fixture: ComponentFixture<InformacionComercialEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionComercialEditComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionComercialEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
