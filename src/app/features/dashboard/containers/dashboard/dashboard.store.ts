import { Injectable, signal } from '@angular/core';
import { Hero } from '../../../../hero';

interface State {
  heroes: Hero[];
}

const initialState: State = {
  heroes: [],
};

@Injectable()
export class DashboardStore {
  state = signal<State>(initialState);

  readonly setHeroes = (heroes: Hero[]) => this.state.set({ heroes });
}
