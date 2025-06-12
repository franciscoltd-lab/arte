// selection.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SelectionService {
  private selection$ = new BehaviorSubject<'artista' | 'restaurante' | null>(null);

  setSelection(selection: 'artista' | 'restaurante' | null) {
    this.selection$.next(selection);
  }

  getSelection() {
    return this.selection$.getValue();
  }

  getSelectionObservable() {
    return this.selection$.asObservable();
  }
}
