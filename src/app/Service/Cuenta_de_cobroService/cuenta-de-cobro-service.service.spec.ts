import { TestBed } from '@angular/core/testing';

import { CuentaDeCobroServiceService } from './cuenta-de-cobro-service.service';

describe('CuentaDeCobroServiceService', () => {
  let service: CuentaDeCobroServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CuentaDeCobroServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
