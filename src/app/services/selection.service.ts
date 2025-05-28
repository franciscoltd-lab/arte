import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SelectionService {

  private readonly STORAGE_KEY = 'userSelection';
  private selected: 'artista' | 'restaurante' | null = null;

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
    return this.selected;
  }

  clear() {
    this.selected = null;
    localStorage.removeItem(this.STORAGE_KEY);
  }
}
