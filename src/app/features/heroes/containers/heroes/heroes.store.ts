import { Injectable, signal } from '@angular/core';
import { Hero } from '../../../../hero';

interface State {
  heroes: Hero[];
}

const initialState: State = {
  heroes: [],
};

@Injectable()
export class HeroesStore {
  state = signal<State>(initialState);

  readonly setHeroes = (heroes: Hero[]) => this.state.set({ heroes });
  readonly addHero = (hero: Hero) => this.state.set({ heroes: [...this.state().heroes, hero] });
  readonly deleteHero = (hero: Hero) => this.state.set({ heroes: this.state().heroes.filter((h) => h.id !== hero.id) });
}
