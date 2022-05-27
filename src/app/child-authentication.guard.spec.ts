import { TestBed } from '@angular/core/testing';

import { ChildAuthenticationGuard } from './child-authentication.guard';

describe('ChildAuthenticationGuard', () => {
  let guard: ChildAuthenticationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ChildAuthenticationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
