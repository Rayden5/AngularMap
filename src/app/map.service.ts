import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapService {

  url = 'https://api.worldbank.org/v2/country/';
  backup = 'http://api.geonames.org/searchJSON?username=keandra22&country='
  jsonFormat = '?format=json';

  countryId: string | null = "";
  country: Object = {};


  constructor(private httpClient: HttpClient) {
  }

  async apiCall(url: string): Promise<any> {
    let infoObservable = this.httpClient.get(url);

    let prom = await new Promise(retrieve => {
      infoObservable.subscribe(data => {
        let info = Object.values(data);
        retrieve(info);
      });
    });

    return prom;
  }

  async setInfo(id: string | null) {
    this.countryId = id;
    let info: Object;
    //(World Bank Group, n.d.)
    info = await this.apiCall(this.url + this.countryId + this.jsonFormat);
    
    if (Object.values(info).length == 1) {
      //(GeoNames Web Service Documentation, n.d.)
      info = await this.apiCall(this.backup + id);
      let countryObj = Object.values(info)[1];
      let i = 0;

      while (countryObj[i]['fclName'] != "city, village,...") {
        i++;
      }
      this.country = {
        name: countryObj[0]['countryName'],
        capital: countryObj[i]['name'],
        region: "Not Classified",
        income: "Not Classified",
        longitude: countryObj[0]['lng'],
        latitude: countryObj[0]['lat'],
      }

    } else {
      let countryObj = Object.values(info)[1][0];
      this.country = {
        name: countryObj['name'],
        capital: countryObj['capitalCity'],
        region: countryObj['region'].value,
        income: countryObj['incomeLevel'].value,
        longitude: countryObj['longitude'],
        latitude: countryObj['latitude'],
      }
    }

    return this.country;
  }

}
