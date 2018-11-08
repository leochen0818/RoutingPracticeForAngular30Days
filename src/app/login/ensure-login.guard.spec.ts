import { TestBed, async, inject } from '@angular/core/testing';

import { EnsureLoginGuard } from './ensure-login.guard';

describe('EnsureLoginGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnsureLoginGuard]
    });
  });

  it('should ...', inject([EnsureLoginGuard], (guard: EnsureLoginGuard) => {
    expect(guard).toBeTruthy();
  }));
});
