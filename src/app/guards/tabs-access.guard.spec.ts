import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { tabsAccessGuard } from './tabs-access.guard';

describe('tabsAccessGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => tabsAccessGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
