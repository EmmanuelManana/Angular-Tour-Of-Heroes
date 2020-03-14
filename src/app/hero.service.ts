import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes = (): Hero[] => HEROES;
}
