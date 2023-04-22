import { Injectable, signal } from '@angular/core';

interface State {
  heroId: number | null;
}

const initialState: State = {
  heroId: null,
};

@Injectable()
export class RouterParams {
  private _state = signal<State>(initialState);
  params = this._state.asReadonly();

  setHeroId = (heroId: number) => this._state.set({ heroId });
}
