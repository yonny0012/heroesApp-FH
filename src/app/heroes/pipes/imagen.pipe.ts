import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen',
})
export class ImagenPipe implements PipeTransform {
  transform(heroe: Heroe): string {
    if (!heroe.id && !heroe.alt_imag) {
      return 'assets/no-image.png';
    } else if (heroe.alt_imag) {
      return heroe.alt_imag;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
}
