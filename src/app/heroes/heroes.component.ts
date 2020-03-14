import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';
import {MessageService} from '../message.service';

// decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService,  private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`);
  }

  getHeroes(): void {
    // getheroes() => Observable
    this.heroService.getHeroes() // emit the array first
        .subscribe((heroesArray) =>  this.heroes = heroesArray ); // then subscribe.
  }



}
