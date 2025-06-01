import { Component, OnInit } from '@angular/core';
import { IonSearchbar } from "@ionic/angular/standalone";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss'],
  standalone: false
})
export class ArtistaComponent {
  banners = [
    {
      title: 'Promo 1',
      image: 'https://via.placeholder.com/100x100'
    },
    {
      title: 'Promo 2',
      image: 'https://via.placeholder.com/100x100?text=2'
    }
  ];

  ngAfterViewInit() {
    // Asegura que el Swiper Web Component esté definido
    customElements.whenDefined('swiper-container').then(() => {
      console.log('Swiper container ready');
    });
  }

}
