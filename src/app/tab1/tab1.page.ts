import { Component } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  selection: string | null = null;

  constructor(
    private selectionService: SelectionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selection = this.selectionService.getSelection();

    console.warn('Tab1', this.selection);
    
    if (!this.selection) {
      this.router.navigate(['/']); // protección adicional
    }
  }

}
