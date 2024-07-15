import { TestBed } from '@angular/core/testing';

import { AvaluoserviceService } from './avaluoservice.service';

describe('AvaluoserviceService', () => {
  let service: AvaluoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvaluoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
