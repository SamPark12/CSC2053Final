//This code initializes the class HeroesComponenet
import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({ // decorator function that specifies the Angular metadata for the component.
  selector: 'app-heroes', //The component's CSS element selector
  templateUrl: './heroes.component.html',//The location of the component's template file.
  styleUrls: ['./heroes.component.css']//The location of the component's private CSS styles.
})
//Always export the component class so you can import it elsewhere … like in the AppModule
export class HeroesComponent implements OnInit {

  heroes = HEROES;
  selectedHero?: Hero;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}