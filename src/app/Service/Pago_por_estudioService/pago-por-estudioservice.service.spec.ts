import { TestBed } from '@angular/core/testing';

import { PagoPorEstudioserviceService } from './pago-por-estudioservice.service';

describe('PagoPorEstudioserviceService', () => {
  let service: PagoPorEstudioserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoPorEstudioserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
