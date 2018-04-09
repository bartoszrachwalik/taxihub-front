import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Order} from '../../model/order.model';

@Injectable()
export class OrderService {
  constructor(private http: HttpClient) {
  }

  makeOrder(order: Order) {
    return this.http.post('http://localhost:8080/orders', order);
  }
}
