import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { ProfileEstablecimientoComponent } from '../components/profile-establecimiento/profile-establecimiento.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'establecimiento/:id',
    component: ProfileEstablecimientoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
