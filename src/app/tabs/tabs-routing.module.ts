import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';
import { tabsAccessGuard } from '../guards/tabs-access.guard';
import { authGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        // canActivate: [tabsAccessGuard],
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'cart',
        // canActivate: [authGuard],
        loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'messages',
        // canActivate: [authGuard],
        loadChildren: () => import('../messsages/messsages.module').then(m => m.MesssagesPageModule)
      },
      {
        path: 'map',
        loadChildren: () => import('../map/map.module').then(m => m.MapPageModule)
      },
      {
        path: '',
        redirectTo: 'home', // ✅ correcto sin /
        pathMatch: 'full'
      },
      {
        path: 'profile',
        // canActivate: [authGuard],
        loadChildren: () => import('../profile/profile.module').then(m => m.ProfilePageModule)
      },
    ]
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
