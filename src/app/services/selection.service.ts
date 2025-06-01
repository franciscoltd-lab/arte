import { inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private readonly STORAGE_KEY = 'userSelection';
  private selected: 'artista' | 'restaurante' | null = null;
  private readonly router = inject(Router);


  constructor() {
    const stored = localStorage.getItem(this.STORAGE_KEY);
    if (stored === 'artista' || stored === 'restaurante') {
      this.selected = stored;
    }
  }

  setSelection(value: 'artista' | 'restaurante') {
    this.selected = value;
    localStorage.setItem(this.STORAGE_KEY, value);
  }

  getSelection(): 'artista' | 'restaurante' | null {
    const selection = localStorage.getItem(this.STORAGE_KEY);

    if (selection === 'artista' || selection === 'restaurante') {
      this.selected = selection;
    } else {
      this.selected = null;
    }

    return this.selected;
  }


  clear() {
    this.selected = null;
    localStorage.removeItem(this.STORAGE_KEY);
    console.log('Selección eliminada: ', localStorage.getItem(this.STORAGE_KEY));
    this.router.navigate(['/']);

  }
}
