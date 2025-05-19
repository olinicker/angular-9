import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { StructuralDirectiveNgifVsIfComponent } from './structural-directive-ngif-vs-if/structural-directive-ngif-vs-if.component';
import { StructuralDirectiveNgForVsForComponent } from './structural-directive-ng-for-vs-for/structural-directive-ng-for-vs-for.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, StructuralDirectiveNgForVsForComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Angular_19_tutorial';
}
