import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HeroService } from '../hero.service';

// decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


  heroes;
  selectedHero: Hero;

  constructor(private heroService: HeroService) { }

  // initialization logic
  ngOnInit(): void {
    this.getHeroes();
  }



  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // subscribe to the ("heroService.getHeroes()") observable and fetch the heroes array.
    this.heroService.getHeroes()
        .subscribe(heroesArray => this.heroes = heroesArray);
  }



}
