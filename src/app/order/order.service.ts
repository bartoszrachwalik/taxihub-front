import {Order} from '../order/order.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrderService {
  userId: string;

  clientOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/client/';
  corporationOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/corporation/';
  driverOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/driver/';

  makeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders';
  activeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders/open/client/';
  checkActiveOrderUrl = 'https://taxihub-backend.herokuapp.com/orders/hasopen/client/';

  cancelUrl = 'https://taxihub-backend.herokuapp.com/orders/';
  openDriverOrdersUrl = 'https://taxihub-backend.herokuapp.com/orders/open';

  constructor(private http: HttpClient) {
    this.userId = localStorage.getItem('id');
  }

  getClientsHistory() {
    return this.http.get<Order[]>(this.clientOrderHistoryUrl + this.userId);
  }

  getCorporationHistory() {
    return this.http.get<Order[]>(this.corporationOrderHistoryUrl + this.userId);
  }

  getDriverHistory() {
    return this.http.get<Order[]>(this.driverOrderHistoryUrl + this.userId);
  }

  makeOrder(order: Order) {
    return this.http.post(this.makeOrderUrl, order);
  }

  getActiveOrder() {
    return this.http.get<Order>(this.activeOrderUrl + this.userId);
  }

  checkActiveOrder() {
    return this.http.get<boolean>(this.checkActiveOrderUrl + this.userId);
  }

  cancelOrder(id: number) {
    return this.http.post(this.cancelUrl + id.toString() + '/canceled', id);
  }

  getOpenOrderForDriver() {
    return this.http.get<Order[]>(this.openDriverOrdersUrl);
  }
}
