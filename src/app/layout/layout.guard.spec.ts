import { TestBed, async, inject } from '@angular/core/testing';

import { LayoutGuard } from './layout.guard';

describe('LayoutGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutGuard]
    });
  });

  it('should ...', inject([LayoutGuard], (guard: LayoutGuard) => {
    expect(guard).toBeTruthy();
  }));
});
