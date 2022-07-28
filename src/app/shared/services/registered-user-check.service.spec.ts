import { TestBed } from '@angular/core/testing';

import { RegisteredUserCheckService } from './registered-user-check.service';

describe('RegisteredUserCheckService', () => {
  let service: RegisteredUserCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredUserCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
