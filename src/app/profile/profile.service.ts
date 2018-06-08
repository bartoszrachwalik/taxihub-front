import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class ProfileService {
  userId: string;

  clientUrl = 'https://taxihub-backend.herokuapp.com/client/profile/';
  driverUrl = 'https://taxihub-backend.herokuapp.com/driver/profile/';
  corporationUrl = 'https://taxihub-backend.herokuapp.com/corporation/profile/';

  corporationNameUrl = 'https://taxihub-backend.herokuapp.com/corporation/name/';

  corporationUpdateUrl = 'https://taxihub-backend.herokuapp.com/corporation';
  clientUpdateUrl = 'https://taxihub-backend.herokuapp.com/client';
  driverUpdateUrl = 'https://taxihub-backend.herokuapp.com/driver';

  constructor(private http: HttpClient) {
    this.userId = localStorage.getItem('id');
  }

  getClientProfile() {
    return this.http.get(this.clientUrl + this.userId);
  }

  getDriverProfile() {
    return this.http.get(this.driverUrl + this.userId);
  }

  getCorporationProfile() {
    return this.http.get(this.corporationUrl + this.userId);
  }

  getCorpName(id: number) {
    return this.http.get(this.corporationNameUrl + id);
  }

  updateCorpProfile(id: number, name: string) {
    return this.http.put(this.corporationUpdateUrl, {id, name});
  }

  updateClientProfile(id: number, name: string, surname: string) {
    return this.http.put(this.clientUpdateUrl, {id, name, surname});
  }

  updateDriverProfile(id: number, name: string, surname: string) {
    return this.http.put(this.driverUpdateUrl, {id, name, surname});
  }
}
