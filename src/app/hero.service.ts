import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

// import an "of" observable from rxjs library
import {Observable, observable, of} from 'rxjs';
import {MessageService} from './message.service';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  // getHeroes = (): Hero[] => HEROES;
  /* of(HEROES) returns an Observable<Hero[]>
   that emits a single value, the array of mock heroes.*/
  // getHeroes = (): Observable<Hero[]> => of(HEROES); // can only return a single value.
  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
