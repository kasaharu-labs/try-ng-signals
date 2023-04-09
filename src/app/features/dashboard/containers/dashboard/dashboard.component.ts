import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, computed, inject, OnInit } from '@angular/core';
import { HeroSearchComponent } from '../../../../hero-search/hero-search.component';
import { DashboardContentComponent } from '../../views/dashboard-content/dashboard-content.component';
import { DashboardService } from './dashboard.service';
import { DashboardStore } from './dashboard.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, HeroSearchComponent, DashboardContentComponent],
  providers: [DashboardStore, DashboardService],
})
export class DashboardComponent implements OnInit {
  private store = inject(DashboardStore);
  private service = inject(DashboardService);

  state = this.store.state;
  heroes = computed(() => this.state().heroes.slice(1, 5));

  ngOnInit(): void {
    this.service.init();
  }
}
