import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-establecimientos',
  templateUrl: './lista-establecimientos.component.html',
  styleUrls: ['./lista-establecimientos.component.scss'],
  standalone: false
})
export class ListaEstablecimientosComponent  implements OnInit {

  constructor() { }

   textoBusqueda: string = '';

  establecimientos = [
    {
      nombre: 'Centenario Café',
      categoria: 'Cafetería',
      imagen: 'assets/establecimientos/cafe.jpg'
    },
    {
      nombre: 'Street Food',
      categoria: 'Restaurante',
      imagen: 'assets/establecimientos/streetfood.jpg'
    }
  ];

  establecimientosFiltrados() {
    return this.establecimientos.filter(e =>
      e.nombre.toLowerCase().includes(this.textoBusqueda.toLowerCase())
    );
  }
  ngOnInit() {}

}
