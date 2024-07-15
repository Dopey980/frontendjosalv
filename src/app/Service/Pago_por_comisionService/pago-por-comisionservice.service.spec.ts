import { TestBed } from '@angular/core/testing';

import { PagoPorComisionserviceService } from './pago-por-comisionservice.service';

describe('PagoPorComisionserviceService', () => {
  let service: PagoPorComisionserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoPorComisionserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
