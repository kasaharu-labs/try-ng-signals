import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Hero } from '../../../../hero';
import { HeroesContentComponent } from '../../views/heroes-content/heroes-content.component';
import { HeroesService } from './heroes.service';
import { HeroesStore } from './heroes.store';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
  standalone: true,
  imports: [NgFor, NgIf, AsyncPipe, HeroesContentComponent],
  providers: [HeroesStore, HeroesService],
})
export class HeroesComponent implements OnInit {
  private readonly store = inject(HeroesStore);
  private readonly service = inject(HeroesService);

  heroes$ = this.store.heroes$;

  ngOnInit(): void {
    this.service.init();
  }

  add(name: string): void {
    this.service.add(name);
  }

  delete(hero: Hero): void {
    this.service.delete(hero);
  }
}
