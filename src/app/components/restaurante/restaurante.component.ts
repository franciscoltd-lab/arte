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
      title: 'Promo 1',
      image: 'https://via.placeholder.com/100x100'
    },
    {
      title: 'Promo 2',
      image: 'https://via.placeholder.com/100x100?text=2'
    },
     {
      title: 'Promo 2',
      image: 'https://via.placeholder.com/100x100?text=2'
    },
     {
      title: 'Promo 2',
      image: 'https://via.placeholder.com/100x100?text=2'
    }
  ];

  artists: Artist[] = [
    {
      name: 'Francisco Reyna',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
     {
      name: 'Clara Magallon',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
     {
      name: 'Clara Magallon',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
     {
      name: 'Clara Magallon',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    },
     {
      name: 'Clara Magallon',
      image: 'https://ionicframework.com/docs/img/demos/avatar.svg',
    }
  ]

}


interface Artist {
  name: string;
  image: string;
}