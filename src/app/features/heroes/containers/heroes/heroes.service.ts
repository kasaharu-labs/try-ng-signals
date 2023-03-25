import { inject, Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { Hero } from '../../../../hero';
import { HeroService } from '../../../../hero.service';
import { HeroesStore } from './heroes.store';

@Injectable()
export class HeroesService {
  private readonly store = inject(HeroesStore);
  private readonly heroService = inject(HeroService);

  async init(): Promise<void> {
    const heroes = await firstValueFrom(this.heroService.getHeroes());
    this.store.setHeroes(heroes);
  }

  async add(heroName: string): Promise<void> {
    const trimmedName = heroName.trim();
    if (!trimmedName) return;

    const newHero = await firstValueFrom(this.heroService.addHero({ name: trimmedName } as Hero));
    this.store.addHero(newHero);
  }

  async delete(hero: Hero): Promise<void> {
    await firstValueFrom(this.heroService.deleteHero(hero.id));
    this.store.deleteHero(hero);
  }
}
