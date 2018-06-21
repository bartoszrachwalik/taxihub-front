import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Car} from './car.model';

@Injectable()
export class CarService {
  private userId: string;
  private getCarUrl = 'https://taxihub-backend.herokuapp.com/driver/';
  private updateCarUrl = 'https://taxihub-backend.herokuapp.com/driver/';

  constructor(private http: HttpClient) {
    this.userId = localStorage.getItem('id');
  }

  getCar() {
    return this.http.get(this.getCarUrl + this.userId + '/car');
  }

  updateCar(car: Car) {
    return this.http.post(this.updateCarUrl + this.userId + '/car', car);
  }
}
