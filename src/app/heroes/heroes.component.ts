import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html', 
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  subject = 'mohan';
  maintitle = 'UI developer'
  title = 'Tour-Of-Heros';
  heroes = HEROES;

  selectedHero: Hero;

  fruits =[
    'Apple',
    'Banana',
    'Orange',
    'Mango',
    'Grapes'
  ];
 
  cars =[
    { name : 'BMW', color : 'white'},
    { name : 'Audi', color : 'red'},
    { name : 'Merc', color : 'gray'},
    { name : 'Jaguar', color : 'white'},
    { name : 'Nexa', color : 'sour'}
  ];

  constructor() { }

  @Output() userCall = new EventEmitter();

  ngOnInit(){
    this.userCall.emit('hero component passing');
  }
 

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
 
  formComp = "";
  actioncalled(value){
    this.formComp = value;
  }
  

}
