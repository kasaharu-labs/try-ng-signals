import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroDetailComponent } from '../../containers/hero-detail/hero-detail.component';
import { RouterParams } from '../../router-params';

@Component({
  standalone: true,
  imports: [CommonModule, HeroDetailComponent],
  template: '<app-hero-detail></app-hero-detail>',
  providers: [RouterParams],
})
export class HeroDetailPageComponent implements OnInit {
  constructor(private readonly route: ActivatedRoute, private readonly routerParams: RouterParams) {}

  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    this.routerParams.setHeroId(Number(heroId));
  }
}
