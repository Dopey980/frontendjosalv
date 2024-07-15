import { TestBed } from '@angular/core/testing';

import { PersonaArriendoserviceService } from './persona-arriendoservice.service';

describe('PersonaArriendoserviceService', () => {
  let service: PersonaArriendoserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaArriendoserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
