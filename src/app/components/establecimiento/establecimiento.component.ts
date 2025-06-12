import { Component, inject, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { LoginComponent } from '../login/login.component';
import { ProfilePage } from 'src/app/profile/profile.page';
import { ObraComponent } from '../obra/obra.component';

@Component({
  selector: 'app-establecimiento',
  templateUrl: './establecimiento.component.html',
  styleUrls: ['./establecimiento.component.scss'],
  standalone: false
})
export class EstablecimientoComponent {


  private readonly modalCtrl = inject(ModalController)

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
      idProfile: 1,
      name: 'Anaid Monroy',
      image: '/assets/img/Artistas/Anaid Monroy/thumbnail.png',
    },
    {
      idProfile: 2,
      name: 'Ivan M. Padilla',
      image: '/assets/img/Artistas/Ivan M. Padilla/thumbnail.jpg',
    },
    {
      idProfile: 3,
      name: 'Joz Carrillo',
      image: '/assets/img/Artistas/Joz Carrillo/thumbnail.png',
    },
    {
      idProfile: 4,
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


  async login() {
    const modal = await this.modalCtrl.create({
      component: LoginComponent,
      cssClass: 'login-modal-class',
      showBackdrop: true,
      backdropDismiss: true
    });

    await modal.present();
  }

  async showProfile() {
    const modal = await this.modalCtrl.create({
      component: ProfilePage,
      cssClass: 'login-modal-class',
      showBackdrop: true,
      backdropDismiss: true,
      initialBreakpoint: 0.9,
      breakpoints: [0, 0.9, 1],
      componentProps: []
    });

    await modal.present();
  }

  async showArtwork() {
    const modal = await this.modalCtrl.create({
      component: ObraComponent,
      cssClass: 'login-modal-class',
      showBackdrop: true,
      backdropDismiss: true,
      initialBreakpoint: 1,
      breakpoints: [0, 0.9, 1],
      componentProps: []
    });

    await modal.present();
  }

}


interface Artist {
  idProfile: number;
  name: string;
  image: string;
}