import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesssagesPageRoutingModule } from './messsages-routing.module';

import { MesssagesPage } from './messsages.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesssagesPageRoutingModule
  ],
  declarations: [MesssagesPage]
})
export class MesssagesPageModule {}
