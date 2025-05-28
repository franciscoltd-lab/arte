import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { SelectionService } from '../services/selection.service';

export const tabsAccessGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const selectionService = inject(SelectionService);

  const selection = selectionService.getSelection();

  if (selection === 'artista' || selection === 'restaurante') {
    return true;
  } else {
    router.navigate(['/']); // vuelve al Home si no hay selección válida
    return false;
  }
};
