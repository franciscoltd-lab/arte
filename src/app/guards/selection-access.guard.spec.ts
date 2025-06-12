import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { selectionAccessGuard } from './selection-access.guard';

describe('selectionAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => selectionAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
