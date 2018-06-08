import {Order} from '../order/order.model';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrderService {
  clientOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/client/20';
  corporationOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/corporation/17';
  driverOrderHistoryUrl = 'https://taxihub-backend.herokuapp.com/orders/history/driver/3';

  makeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders';
  activeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders/open/client/20';
  checkActiveOrderUrl = 'https://taxihub-backend.herokuapp.com/orders/hasopen/client/20';

  cancelUrl = 'https://taxihub-backend.herokuapp.com/orders/';
  openDriverOrdersUrl = 'https://taxihub-backend.herokuapp.com/orders/open';

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

  checkActiveOrder() {
    return this.http.get<boolean>(this.checkActiveOrderUrl);
  }

  cancelOrder(id: number) {
    return this.http.post(this.cancelUrl + id.toString() + '/canceled', id);
  }

  getOpenOrderForDriver() {
    return this.http.get<Order[]>(this.openDriverOrdersUrl);
  }
}
