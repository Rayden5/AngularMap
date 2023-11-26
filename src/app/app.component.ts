import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
  ],
  template: `
  <div class="flex">
    <h1>{{title}}</h1>
    <div class="flex">
        <a [routerLink]="['/']">Map without info</a>
        <a [routerLink]="['/mapinfo']">Map with Info</a>
    </div>
</div>
<hr>

<router-outlet></router-outlet>
  `,
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'World Map';

}
