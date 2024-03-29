import { Component, Input } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styles: [
    `
      mat-card {
        margin-top: 20px;
      }
      button{
        margin-left: 5px;
        margin-right: 5px;
      }
    `,
  ],
})
export class HeroeCardComponent {
  @Input() heroe!: Heroe;
}
