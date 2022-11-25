import { TestBed } from '@angular/core/testing';

import { UserCanReadGuard } from './user-can-read.guard';

describe('UserCanReadGuard', () => {
  let guard: UserCanReadGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserCanReadGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
