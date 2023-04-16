import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../containers/dashboard/dashboard.component';

@Component({
  standalone: true,
  imports: [CommonModule, DashboardComponent],
  template: '<app-dashboard></app-dashboard>',
  host: { 'collision-id': 'DashboardPageComponent' },
})
export class DashboardPageComponent {}
