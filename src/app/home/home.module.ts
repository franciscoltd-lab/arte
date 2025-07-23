import { IonicModule } from '@ionic/angular';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HomePageRoutingModule } from './home-routing.module';
import { ArtistaComponent } from '../components/artista/artista.component';
import { EstablecimientoComponent } from '../components/establecimiento/establecimiento.component';
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, ArtistaComponent, EstablecimientoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class HomePageModule {}
