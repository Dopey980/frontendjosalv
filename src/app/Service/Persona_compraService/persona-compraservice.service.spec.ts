import { TestBed } from '@angular/core/testing';

import { PersonaCompraserviceService } from './persona-compraservice.service';

describe('PersonaCompraserviceService', () => {
  let service: PersonaCompraserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaCompraserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
