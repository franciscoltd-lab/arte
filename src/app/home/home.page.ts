import { Component } from '@angular/core';
import { SelectionService } from '../services/selection.service';
import { Router } from '@angular/router';
import { cardTransitionAnimation } from '../animations/filp-card.animation';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
  animations: [cardTransitionAnimation]

})
export class HomePage {

  selection: string | null = null;

  constructor(
    private selectionService: SelectionService,
    private router: Router
  ) { }

  ngOnInit() {
    this.selectionService.getSelectionObservable().subscribe(selection => {
      this.selection = selection;

      if (!this.selection) {
        this.router.navigate(['/']);
      }

    });
  }

}
