import { Component, OnInit , Input} from '@angular/core';
import { Hero } from '../hero';



@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() hero : Hero;
  @Input() hero_messages: string;
  getMessage(hero_messages : string): void{
    this.hero_messages = hero_messages;
  }
}
