import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonHeader } from "@ionic/angular/standalone";

@Component({
  selector: 'app-profile-establecimiento',
  templateUrl: './profile-establecimiento.component.html',
  styleUrls: ['./profile-establecimiento.component.scss'],
  standalone: false
})
export class ProfileEstablecimientoComponent implements OnInit {
  establecimiento: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');

    // Por ahora usamos datos estáticos (puedes conectarlo luego a un servicio)
    const data = {
      '1': {
        nombre: 'Centenario Café',
        imagen: 'assets/establecimientos/cafe.jpg',
        direccion: 'C. Joaquín Angulo 841, 44200 Guadalajara, Jal.',
        mapa: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!...' // reemplaza con iframe real
      }
    };

    this.establecimiento = data[id as keyof typeof data];
  }
}
