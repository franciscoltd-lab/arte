import { Component, OnInit } from '@angular/core';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-lista-artistas',
  templateUrl: './lista-artistas.component.html',
  styleUrls: ['./lista-artistas.component.scss'],
  standalone: false
})
export class ListaArtistasComponent  implements OnInit {

   filtroSeleccionado = 'artista';

  artistas = [
    {
      nombre: 'Ivan M. Padilla',
      categoria: 'Fotografía',
      avatar: 'assets/avatars/ivan.png',
      obra: 'assets/obras/obra1.png'
    },
    {
      nombre: 'Joz Carrillo',
      categoria: 'Fotografía',
      avatar: 'assets/avatars/joz.png',
      obra: 'assets/obras/obra2.png'
    },
    {
      nombre: 'Salva Arteaga',
      categoria: 'Pintura',
      avatar: 'assets/avatars/salva.png',
      obra: 'assets/obras/obra3.png'
    }
  ];

  constructor() { }

  ngOnInit() {}

}
