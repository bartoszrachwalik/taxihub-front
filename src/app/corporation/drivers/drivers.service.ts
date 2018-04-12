import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Driver} from '../../driver/driver.model';

@Injectable()
export class DriversService {

  getDriversUrl = 'https://taxihub-backend.herokuapp.com/corporation/1/drivers';

  constructor(private http: HttpClient) {
  }

  getDrivers() {
    return this.http.get<Driver[]>(this.getDriversUrl);
  }

}
