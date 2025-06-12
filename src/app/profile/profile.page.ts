import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: false
})
export class ProfilePage implements OnInit {
  obrasExpuestas = [
    {
      image: 'assets/img/Artistas/Ivan M. Padilla/foto2.png',
      categoria: 'Fotografía',
      titulo: 'Paisaje'
    },
    {
      image: 'assets/img/Artistas/Ivan M. Padilla/foto5.png',
      categoria: 'Fotografía',
      titulo: 'Danza'
    },
      {
      image: 'assets/img/Artistas/Ivan M. Padilla/foto4.png',
      categoria: 'Fotografía',
      titulo: 'Danza'
    }
  ];

  obrasPasadas = [
    {
      image: 'assets/img/Artistas/Ivan M. Padilla/foto1.jpg',
      categoria: 'Fotografía',
      titulo: 'Danza'
    },
    {
      image: 'assets/img/Artistas/Ivan M. Padilla/foto2.png',
      categoria: 'Fotografía',
      titulo: 'Paisaje'
    },
    {
      image: 'assets/img/Artistas/Ivan M. Padilla/foto3.png',
      categoria: 'Fotografía',
      titulo: 'Danza'
    }
  ];


  ngOnInit() {
  }

}
