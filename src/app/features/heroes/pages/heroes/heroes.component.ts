import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from '../../containers/heroes/heroes.component';

@Component({
  standalone: true,
  imports: [CommonModule, HeroesComponent],
  template: '<app-heroes></app-heroes>',
})
export class HeroesPageComponent {}
