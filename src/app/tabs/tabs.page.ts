import { Component, inject } from '@angular/core';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: false,
})
export class TabsPage {

  private readonly selectionService = inject(SelectionService);
  logOut() {
    this.selectionService.clear();

  }
}
