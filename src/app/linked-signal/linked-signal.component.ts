import { Component, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-linked-signal',
  imports: [],
  templateUrl: './linked-signal.component.html',
  styleUrl: './linked-signal.component.scss',
})
export class LinkedSignalComponent {
  quantifySignal = signal(1);
  price = 10;

  // total = linkedSignal(() => {
  //   return this.quantifySignal() * this.price;
  // });

  total = linkedSignal({
    source: this.quantifySignal,
    computation: () => this.quantifySignal() * this.price,
  });

  calculate() {
    this.quantifySignal.set(2);
  }
}
