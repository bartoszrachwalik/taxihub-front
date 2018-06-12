import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Driver} from './driver.model';

@Injectable()
export class DriverService {
  getDriversUrl = 'https://taxihub-backend.herokuapp.com/corporation/';

  constructor(private http: HttpClient) {
  }

  verifyPassword(password: string, token: string) {
    return this.http.post('https://taxihub-backend.herokuapp.com/confirm', {password, token});
  }

  getDrivers() {
    return this.http.get<Driver[]>(this.getDriversUrl + localStorage.getItem('id') + '/drivers');
  }
}

