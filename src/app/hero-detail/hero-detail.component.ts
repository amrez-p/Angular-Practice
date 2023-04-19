import { Component, Input } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  // styleUrls: ['./hero-detail.component.css'],
})
export class HeroDetailComponent {
  //Parameters//
  @Input() hero?: Hero;
  constructor(
    // ActivatedRoute component is interested in the route's parameters (id) extracted from the URL.
    private route: ActivatedRoute,
    // HeroService fetches hero data from the remote server.
    private heroService: HeroService,
    // location service lets you navigate back to the previous view.
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }
}
