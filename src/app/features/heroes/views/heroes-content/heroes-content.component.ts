import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../../../hero';

@Component({
  selector: 'app-heroes-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './heroes-content.component.html',
  styleUrls: ['./heroes-content.component.scss'],
})
export class HeroesContentComponent {
  @Input() heroes: Hero[] | null = null;
  @Output() heroDeleted = new EventEmitter<Hero>();
}
