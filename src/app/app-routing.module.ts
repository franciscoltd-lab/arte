import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { tabsAccessGuard } from './guards/tabs-access.guard';
import { homeAccessGuard } from './guards/home-access.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [homeAccessGuard],
    component: HomeComponent
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
