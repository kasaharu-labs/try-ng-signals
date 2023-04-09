import { CommonModule } from '@angular/common';
import { Component, Input, Signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Hero } from '../../../../hero';

@Component({
  selector: 'app-dashboard-content',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard-content.component.html',
  styleUrls: ['./dashboard-content.component.scss'],
})
export class DashboardContentComponent {
  @Input() heroes!: Signal<Hero[]>;
  topHeroes = computed(() => this.heroes().slice(1, 5));
}
