import {Order} from '../order/order.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OrderService {
  makeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders';
  clientOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/client/4';
  corporationOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/corporation/';
  driverOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/driver/1';
  activeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders/open/client/1';
  cancelUrl = 'https://taxihub-backend.herokuapp.com/orders/4/canceled';
  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private http: HttpClient) {
  }

  // todo with params ({id: number, role: string})
  getClientsHistory() {
    return this.http.get<Order[]>(this.clientOrderHistoryUrl);
  }

  getCorporationHistory() {
    return this.http.get<Order[]>(this.corporationOrderHistoryUrl);
  }

  getDriverHistory() {
    return this.http.get<Order[]>(this.driverOrderHistoryUrl);
  }

  makeOrder(order: Order) {
    return this.http.post(this.makeOrderUrl, order, {headers: this.headers});
  }

  getActiveOrder() {
    return this.http.get<Order>(this.activeOrderUrl);
  }

  cancelOrder(id: number) {
    return this.http.post(this.cancelUrl, id);
  }

}
