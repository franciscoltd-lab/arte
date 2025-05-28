import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonContent } from "@ionic/angular/standalone";
import { SelectionService } from '../services/selection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false
})
export class HomeComponent {

  isFading = false;

  constructor(private router: Router) { }

  private readonly selectionService = inject(SelectionService);

  handleClick(selection: 'artista' | 'restaurante') {
    this.selectionService.setSelection(selection);

    if (this.isFading) return;
    this.isFading = true;

    setTimeout(() => {
      this.router.navigate(['tabs']);
    }, 600); // tiempo igual al de la transición en CSS
  }


}
