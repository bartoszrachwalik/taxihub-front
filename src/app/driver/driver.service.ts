import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DriverService {
  constructor(private http: HttpClient) {
  }

  verifyPassword(password: string, token: string) {
    return this.http.post('https://taxihub-backend.herokuapp.com/confirm', {password, token});
  }
}

