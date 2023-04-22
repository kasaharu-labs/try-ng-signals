import { Routes } from '@angular/router';
import { DashboardPageComponent } from './features/dashboard/pages/dashboard/dashboard.component';
import { HeroesPageComponent } from './features/heroes/pages/heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

export const ROUTES: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPageComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesPageComponent },
];
