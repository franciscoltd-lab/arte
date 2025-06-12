import { Component, inject } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  private readonly selectionService = inject(SelectionService);
  private readonly router = inject(Router);
  private readonly authService = inject(AuthService);

  logOut() {
    let selection = this.selectionService.getSelection();

    selection = selection == 'artista' ? 'restaurante' : 'artista';
    this.selectionService.setSelection(selection);

  }

  isLogedIn(): boolean{
    return this.authService.isLogedIn();
  }
}
