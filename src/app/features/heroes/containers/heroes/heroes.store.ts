import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { Hero } from '../../../../hero';

interface State {
  heroes: Hero[];
}

const initialState: State = {
  heroes: [],
};

@Injectable()
export class HeroesStore extends ComponentStore<State> {
  constructor() {
    super(initialState);
  }

  readonly heroes$ = this.select((state) => state.heroes);
  readonly setHeroes = this.updater((state, heroes: Hero[]) => ({ ...state, heroes }));
}
