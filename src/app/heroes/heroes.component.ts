import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {Heroes_array} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  heroes : Hero[] = Heroes_array;

  selectedHero : Hero;

  onSelect(hero : Hero) : void {
    this.selectedHero = hero;
  }

}
