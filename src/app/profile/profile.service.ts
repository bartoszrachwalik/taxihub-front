import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfileService {
  clientUrl = 'https://taxihub-backend.herokuapp.com/client/profile/20';
  driverUrl = 'https://taxihub-backend.herokuapp.com/driver/profile/3';
  corporationUrl = 'https://taxihub-backend.herokuapp.com/corporation/profile/17';
  corporationNameUrl = 'https://taxihub-backend.herokuapp.com/corporation/getname/';
  corporationUpdateUrl = 'https://taxihub-backend.herokuapp.com/corporation';

  constructor(private http: HttpClient) {
  }

  getClientProfile() {
    return this.http.get(this.clientUrl);
  }

  getDriverProfile() {
    return this.http.get(this.driverUrl);
  }

  getCorporationProfile() {
    return this.http.get(this.corporationUrl);
  }

  getCorpName(id: number) {
    return this.http.get(this.corporationNameUrl + id);
  }

  updateCorpName(id: number, name: string) {
    return this.http.put(this.corporationUpdateUrl, {id, name});
  }
}
