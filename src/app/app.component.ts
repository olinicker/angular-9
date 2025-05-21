import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StructuralDirectiveNgswitchVsSwitchComponent } from './structural-directive-ngswitch-vs-switch/structural-directive-ngswitch-vs-switch.component';
import { AttributeDirectivesComponent } from './attribute-directives/attribute-directives.component';
import { SignalsComponent } from './signals/signals.component';
import { LinkedSignalComponent } from './linked-signal/linked-signal.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    StructuralDirectiveNgswitchVsSwitchComponent,
    AttributeDirectivesComponent,
    SignalsComponent,
    LinkedSignalComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular_19_tutorial';
}
