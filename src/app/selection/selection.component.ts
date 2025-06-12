import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.scss'],
  standalone: false
})
export class SelectionComponent {

  isFading = false;

  constructor(private router: Router) { }

  private readonly selectionService = inject(SelectionService);

  handleClick(selection: 'artista' | 'restaurante') {
    this.selectionService.setSelection(selection);
    console.warn(selection)

    if (this.isFading) return;
    this.isFading = true;

    setTimeout(() => {
      this.router.navigate(['tabs']);
    }, 600); // tiempo igual al de la transición en CSS
  }


}
