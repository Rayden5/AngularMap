import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SvgmapComponent } from './svgmap/svgmap.component';
import { InfoComponent } from './info/info.component';

@Component({
  selector: 'app-mapinfo',
  standalone: true,
  imports: [
    CommonModule,
    SvgmapComponent,
    InfoComponent,
  ],
  template: `
    <div class="flex">
      <app-svgmap (valueChange)='updateInfo($event)'></app-svgmap>
      <app-info [countryMap]='countryInfo'></app-info>
    </div>
  `,
  styleUrl: './mapinfo.component.css'
})
export class MapinfoComponent {
  countryInfo: any;

  updateInfo(info: Object) {
    this.countryInfo = info;
  }
}
