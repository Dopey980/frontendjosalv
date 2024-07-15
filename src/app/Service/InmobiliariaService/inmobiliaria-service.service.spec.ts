import { TestBed } from '@angular/core/testing';

import { InmobiliariaServiceService } from './inmobiliaria-service.service';

describe('InmobiliariaServiceService', () => {
  let service: InmobiliariaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InmobiliariaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
