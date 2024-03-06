import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { ConfirmComponent } from '../../components/confirm/confirm.component';
import { Heroe, Publisher } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 0.5rem;
      }
      button {
        margin-left: 20px;
        margin-right: 20px;
      }
    `,
  ],
})
export class AddComponent implements OnInit {
  publishers = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];
  heroe: Heroe = {
    superhero: '',
    publisher: Publisher.MarvelComics,
    alter_ego: '',
    first_appearance: '',
    characters: '',
    alt_imag: '',
  };
  isRouteAdd: boolean = true;

  constructor(
    private heroeServise: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    if (!this.router.url.includes('edit')) {
      this.isRouteAdd = true;
      return;
    } else {
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.heroeServise.getHeroe(id)))
        .subscribe((heroe) => (this.heroe = heroe));
      this.isRouteAdd = false;
    }
  }
  save() {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroeServise.updateHeroe(this.heroe).subscribe((resp) => {
        this.showSnackBar('Registro atualizado');
      });
    } else {
      this.heroeServise.addHeroe(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/edit', heroe.id]);
        this.showSnackBar('Registro creado');
      });
    }
  }
  deleteHeroe() {
    const dialog = this.dialog.open(ConfirmComponent, {
      width: '30rem',
      height: '20rem',
      data: this.heroe,
    });
    
    dialog.afterClosed().subscribe((resp) => {
      if (resp) {
        this.heroeServise.deleteHeroe(this.heroe.id!).subscribe((resp) => {
          this.router.navigate(['/heroes']);
          this.showSnackBar('Registro eliminado');
        });
      }
    });
  }
  showSnackBar(message: string): void {
    this.snackBar.open(message, undefined, {
      duration: 1500,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
}
