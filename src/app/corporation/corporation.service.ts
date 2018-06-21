import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class CorporationService {

  constructor(private http: HttpClient) {
  }

  register(corporation) {
    return this.http.post('https://taxihub-backend.herokuapp.com/corporation', corporation);
  }

  registerDriver(driver) {
    return this.http.post('https://taxihub-backend.herokuapp.com/corporation/driver', driver);
  }
}
