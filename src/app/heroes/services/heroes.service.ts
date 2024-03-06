import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';
import { environment } from 'src/environment/environment';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private url: string = environment.urlHost;
  constructor(private http: HttpClient) {}
  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.url}/heroes`);
  }
  getHeroe(id: string): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.url}/heroes/${id}`);
  }
  getSuggestions(term: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.url}/heroes?q=${term}&_limit=6`);
  }
  addHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${environment.urlHost}/heroes`, heroe);
  }
  updateHeroe(heroe: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(
      `${environment.urlHost}/heroes/${heroe.id}`,
      heroe
    );
  }
  deleteHeroe(id: string): Observable<any> {
    return this.http.delete<any>(`${environment.urlHost}/heroes/${id}`);
  }
}
