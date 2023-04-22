import { Location, NgIf, UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hero } from '../../../../hero';
import { HeroService } from '../../../../hero.service';
import { RouterParams } from '../../router-params';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css'],
  standalone: true,
  imports: [NgIf, FormsModule, UpperCasePipe],
})
export class HeroDetailComponent implements OnInit {
  hero: Hero | undefined;

  constructor(private heroService: HeroService, private location: Location, private readonly routerParams: RouterParams) {}

  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    const id = this.routerParams.params().heroId;
    if (id === null) {
      return;
    }

    this.heroService.getHero(id).subscribe((hero) => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.hero) {
      this.heroService.updateHero(this.hero).subscribe(() => this.goBack());
    }
  }
}
