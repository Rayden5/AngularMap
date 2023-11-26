import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnChanges {
  listElems = "<li>Hover over an area on the map</li>";
  countryTitle = "Country Data";
  @Input() countryMap = Object();

  ngOnChanges(change: SimpleChanges) {
    if (change['countryMap']) {
      this.updateInfoBox();
    }
  }

  updateInfoBox() {
    if (this.countryMap != undefined) {
      this.countryTitle = this.countryMap.name;
      this.listElems = `
      <li>Capital: ${this.countryMap.capital}</li>
      <li>Region: ${this.countryMap.region}</li>
      <li>Income Level: ${this.countryMap.income}</li>
      <li>Longitude: ${this.countryMap.longitude}</li>
      <li>Latitude: ${this.countryMap.latitude}</li>
      `
    }
  }
}
