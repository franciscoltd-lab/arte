import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectionComponent } from './selection/selection.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObraComponent } from './components/obra/obra.component';
import { ListaArtistasComponent } from './components/lista-artistas/lista-artistas.component';
import { ListaEstablecimientosComponent } from './components/lista-establecimientos/lista-establecimientos.component';
import { FormsModule } from '@angular/forms';
import { ProfileEstablecimientoComponent } from './components/profile-establecimiento/profile-establecimiento.component';

@NgModule({
  declarations: [AppComponent, SelectionComponent, ObraComponent, ListaArtistasComponent, ListaEstablecimientosComponent, ProfileEstablecimientoComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, BrowserAnimationsModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})
export class AppModule { }
