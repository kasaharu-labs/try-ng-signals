import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroDetailComponent } from '../../containers/hero-detail/hero-detail.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeroDetailComponent],
  template: '<app-hero-detail></app-hero-detail>',
})
export class HeroDetailPageComponent {}
