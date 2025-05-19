import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectiveNgswitchVsSwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular_19_tutorial';
}
