import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 0.5rem;
      }
    `,
  ],
})
export class HeroeComponent implements OnInit {
  heroe!: Heroe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private heroeServise: HeroesService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroeServise.getHeroe(id)))
      .subscribe((heroe) => {
        this.heroe = heroe;
      });
  }
  backNavigation() {
    this.router.navigate(['/heroes/list']);
  }
}
