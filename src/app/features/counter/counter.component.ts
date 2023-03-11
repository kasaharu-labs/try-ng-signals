import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CounterComponent {
  counter = signal(0);

  incrementCount(): void {
    this.counter.set(this.counter() + 1);
  }

  decrementCount(): void {
    this.counter.update(() => this.counter() - 1);
  }

  now(): Date {
    return new Date();
  }
}
