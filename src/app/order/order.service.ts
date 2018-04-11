import {Order} from '../order/order.model';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OrderService {
  makeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders';
  getClientOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/client/4';
  getCorporationOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/corporation/';
  getDriverOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/driver/1';
  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private http: HttpClient) {
  }

  // todo with params ({id: number, role: string})
  getClientsOrdersHistory() {
    return this.http.get<Order[]>(this.getClientOrderHistoryUrl);
  }

  getCorporationOrdersHistory() {
    return this.http.get<Order[]>(this.getCorporationOrderHistoryUrl);
  }

  getDriverOrdersHistory() {
    return this.http.get<Order[]>(this.getDriverOrderHistoryUrl);
  }

  makeOrder(order: Order) {
    return this.http.post(this.makeOrderUrl, order, {headers: this.headers});
  }
}
