import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesssagesPage } from './messsages.page';

const routes: Routes = [
  {
    path: '',
    component: MesssagesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesssagesPageRoutingModule {}
