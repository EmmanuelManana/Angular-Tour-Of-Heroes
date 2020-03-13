import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import { HEROES } from '../mock-heroes';


// decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = HEROES; // points to the an array of interfaces
  selectedHero: Hero; // points to the interface.

  constructor() { }

  // put initialization logic here
  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
