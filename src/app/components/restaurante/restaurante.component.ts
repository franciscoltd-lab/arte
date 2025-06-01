import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.scss'],
  standalone: false
})
export class RestauranteComponent {

  banners = [
    {
      title: 'Danza',
      image: 'assets/img/Artistas/Ivan M. Padilla/foto1.jpg',
      categoria: 'danza',
      precio: 5000
    },
    {
      title: 'Reinvención',
      image: 'assets/img/Artistas/Salva Arteaga/pintura1.png',
      categoria: 'Pintura',
      precio: 5000
    },
    {
      title: 'En mi propia piel',
      image: 'assets/img/Artistas/Joz Carrillo/foto2.png',
      categoria: 'Fotografía',
      precio: 5000
    },
    {
      title: 'Danza',
      image: 'assets/img/Artistas/Ivan M. Padilla/foto7.png',
      categoria: 'Fotografía',
      precio: 5000
    }
  ];

  artists: Artist[] = [
    {
      name: 'Anaid Monroy',
      image: '/assets/img/Artistas/Anaid Monroy/thumbnail.png',
    },
    {
      name: 'Ivan M. Padilla',
      image: '/assets/img/Artistas/Ivan M. Padilla/thumbnail.jpg',
    },
    {
      name: 'Joz Carrillo',
      image: '/assets/img/Artistas/Joz Carrillo/thumbnail.png',
    },
    {
      name: 'Salva Arteaga',
      image: '/assets/img/Artistas/Salva Arteaga/thumbnail.png',
    },
    // {
    //   name: 'Clara Magallon',
    //   image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    // }
  ]

  getSanitizedUrl(url: string): string {
    return `url('${encodeURI(url)}')`;
  }

}


interface Artist {
  name: string;
  image: string;
}