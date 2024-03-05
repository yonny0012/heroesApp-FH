import { Component } from '@angular/core';
import { MatAutocompleteActivatedEvent } from '@angular/material/autocomplete';

import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  termino: string = '';
  heroes: Heroe[] = [];
  heroeSelected: Heroe | undefined;
  constructor(private heroeService: HeroesService) {}
  searching() {
    if (this.termino == '') {
      return;
    } else {
      this.heroeService
        .getSuggestions(this.termino.trim())
        .subscribe((heroe) => (this.heroes = heroe));
    }
  }
  optienSelected(event: MatAutocompleteActivatedEvent) {
    if (!event.option?.value) {
      this.heroeSelected = undefined;
      return;
    }
    const heroe: Heroe = event.option?.value;
    this.termino = heroe.superhero;
    this.heroeService
      .getHeroe(heroe.id!)
      .subscribe((heroe) => (this.heroeSelected = heroe));
  }
}
