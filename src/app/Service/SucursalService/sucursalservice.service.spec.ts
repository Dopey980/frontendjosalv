import { TestBed } from '@angular/core/testing';

import { SucursalserviceService } from './sucursalservice.service';

describe('SucursalserviceService', () => {
  let service: SucursalserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SucursalserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
