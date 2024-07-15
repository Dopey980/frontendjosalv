import { TestBed } from '@angular/core/testing';

import { InformacionComercialserviceService } from './informacion-comericalservice.service';

describe('InformacionComericalserviceService', () => {
  let service: InformacionComercialserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InformacionComercialserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
