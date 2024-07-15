import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformacionComercialAddComponent } from './informacion-comercial-add.component';

describe('InformacionComercialAddComponent', () => {
  let component: InformacionComercialAddComponent;
  let fixture: ComponentFixture<InformacionComercialAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformacionComercialAddComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InformacionComercialAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
