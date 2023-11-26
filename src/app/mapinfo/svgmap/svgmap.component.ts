import { Component, inject, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapService } from '../../map.service';

@Component({
  selector: 'app-svgmap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './svgmap.component.svg'
})

export class SvgmapComponent {
  mapService: MapService = inject(MapService);
  @Output() valueChange = new EventEmitter<Object>();

  hoverEvent(e: Event) {
    let elem = e.target as HTMLElement;
    let id = elem.getAttribute('id');
    elem.style.fill = 'red';
    this.mapService.setInfo(id!).then(result => {
      this.valueChange.emit(result);
    });
  }

  hoverLeave(e: Event) {
    let elem = e.target as HTMLElement;
    elem.style.fill = 'black';
  }

}
