import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// import an "of" observable from rxjs library
import {Observable, observable, of} from 'rxjs';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  // getHeroes = (): Hero[] => HEROES;
  /* of(HEROES) returns an Observable<Hero[]>
   that emits a single value, the array of mock heroes.*/
  getHeroes = (): Observable<Hero[]> => of(HEROES);
}
