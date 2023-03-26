import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-creator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero-creator.component.html',
  styleUrls: ['./hero-creator.component.scss'],
})
export class HeroCreatorComponent {
  @Output() heroAdded = new EventEmitter<string>();
}
