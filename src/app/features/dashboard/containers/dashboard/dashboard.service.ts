import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { HeroService } from '../../../../hero.service';
import { DashboardStore } from './dashboard.store';

@Injectable()
export class DashboardService {
  private store = inject(DashboardStore);
  private heroService = inject(HeroService);

  async init(): Promise<void> {
    const heroes = await firstValueFrom(this.heroService.getHeroes());
    this.store.setHeroes(heroes);
  }
}
