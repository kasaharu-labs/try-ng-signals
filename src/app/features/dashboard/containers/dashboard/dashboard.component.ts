import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeroSearchComponent } from '../../../../hero-search/hero-search.component';
import { DashboardService } from './dashboard.service';
import { DashboardStore } from './dashboard.store';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, RouterLink, HeroSearchComponent],
  providers: [DashboardStore, DashboardService],
})
export class DashboardComponent implements OnInit {
  private store = inject(DashboardStore);
  private service = inject(DashboardService);

  heroes$ = this.store.heroes$;

  ngOnInit(): void {
    this.service.init();
  }
}
