import {Order} from '../order/order.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrderService {
  makeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders';
  clientOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/client/1';
  corporationOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/corporation/1';
  driverOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/driver/1';
  activeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders/open/client/1';
  openDriverOrdersUrl = 'https://taxihub-backend.herokuapp.com/orders/open/driver/1';
  cancelUrl = 'https://taxihub-backend.herokuapp.com/orders/7/canceled';

  constructor(private http: HttpClient) {
  }

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
    return this.http.post(this.makeOrderUrl, order);
  }

  getActiveOrder() {
    return this.http.get<Order>(this.activeOrderUrl);
  }

  cancelOrder(id: number) {
    return this.http.post(this.cancelUrl, id);
  }

  getOpenOrderForDriver() {
    return this.http.get<Order[]>(this.openDriverOrdersUrl);
  }
}
