import { TestBed } from '@angular/core/testing';

import { CanAccessToCustomersGuard } from './can-access-to-customers.guard';

describe('CanAccessToCustomersGuard', () => {
  let guard: CanAccessToCustomersGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanAccessToCustomersGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
