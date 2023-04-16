import { Component } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from '../hero.service';
// import { HEROES } from './mock-heroes';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent {
  // hero: Hero = {
  //   id: 1,
  //   name: 'Windstorm',
  // };
  //variable//
  // selectedHero?: Hero;
  //variable//
  //Array//
  heroes: Hero[] = [];
  //Array//

  // constructor(private heroService: HeroService) {}
  constructor(
    private heroService: HeroService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  //onClick fuction//
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;

  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  // }
  //onClick fuction//

  //Fetching and Pushing data to Array//
  // getHeroes(): void {
  //   this.heroes = this.heroService.getHeroes();
  // }
  //Pushing data to Array//

  //async await callback//
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }
  //async await callback//
}
