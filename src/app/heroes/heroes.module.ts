import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddComponent } from './pages/add/add.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmComponent } from './components/confirm/confirm.component';

@NgModule({
  declarations: [
    AddComponent,
    HeroeCardComponent,
    HeroeComponent,
    HomeComponent,
    ListComponent,
    SearchComponent,
    ImagenPipe,
    ConfirmComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HeroesRoutingModule,
    MaterialModule,
  ],
})
export class HeroesModule {}
