import { Component, inject, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { IonSearchbar } from "@ionic/angular/standalone";
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss'],
  standalone: false
})
export class ArtistaComponent {

  private readonly modalCtrl = inject(ModalController);

  banners = [
    {
      title: 'Evento en Centenario Café',
      titulo: 'Centenario Café',
      image: 'assets/img/Establecimientos/Centenario Café/4.jpg',
      image2: 'assets/img/Establecimientos/Centenario Café/3.jpg',
      categoria: 'Cafetería',
      precio: 5000
    },
  ];

  // ngAfterViewInit() {
  //   // Asegura que el Swiper Web Component esté definido
  //   customElements.whenDefined('swiper-container').then(() => {
  //     console.log('Swiper container ready');
  //   });
  // }

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
  

}
