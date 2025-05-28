import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { ArtistaComponent } from '../components/artista/artista.component';
import { RestauranteComponent } from '../components/restaurante/restaurante.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ArtistaComponent,
    RestauranteComponent
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
