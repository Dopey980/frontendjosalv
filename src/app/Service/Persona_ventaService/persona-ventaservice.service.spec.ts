import { TestBed } from '@angular/core/testing';

import { PersonaVentaserviceService } from './persona-ventaservice.service';

describe('PersonaVentaserviceService', () => {
  let service: PersonaVentaserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaVentaserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
