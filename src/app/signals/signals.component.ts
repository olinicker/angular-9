import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signals',
  imports: [],
  templateUrl: './signals.component.html',
  styleUrl: './signals.component.scss',
})
export class SignalsComponent {
  counter = signal(0);
  // pode ser escrito assim também -> counter : WritableSignal<number> = signal(0);

  constructor() {
    this.counter.set(5);

    effect(() => console.log('O valor do contador é: ' + this.counter()));
  }

  onIncrement() {
    this.counter.update((prev) => prev + 5);
  }

  onDecrement() {
    this.counter.update((prev) => prev - 5);
  }
}
