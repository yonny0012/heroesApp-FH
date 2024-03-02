import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListComponent } from './pages/list/list.component';



@NgModule({
  declarations: [
    HomeComponent,
    AddComponent,
    SearchComponent,
    HeroeComponent,
    ListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
