import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SelectionService } from '../services/selection.service';

export const selectionAccessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const selectionService = inject(SelectionService);

  const selection = selectionService.getSelection();

  if (!selection) {
    return true;
  } else {
    router.navigate(['tabs']); // vuelve al Home si no hay selección válida
    return false;
  }
};
