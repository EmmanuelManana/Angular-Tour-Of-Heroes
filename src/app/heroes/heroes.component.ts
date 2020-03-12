import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';


// decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id : 1,
    name : 'Windstorm'
  };

  constructor() { }

  // put initialization logic here
  ngOnInit(): void {
  }

}
