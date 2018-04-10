import {Order} from '../order/order.model';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable()
export class OrderService {
  makeOrderUrl = 'https://taxihub-backend.herokuapp.com/orders';
  getOrderHistoryUrl = '';
  historyChanged = new EventEmitter<Order[]>();
  orderHistory: Order[];
  headers = new HttpHeaders({'Content-Type': 'application/json; charset=utf-8'});

  constructor(private http: HttpClient) {
  }

  addToOrderHistory(order: Order) {
    this.orderHistory.push(order);
    this.historyChanged.emit(this.orderHistory.slice());
  }

  // todo with params ({id: number, role: string})
  getOrdersHistory() {
    return this.http.get<Order[]>(this.getOrderHistoryUrl);
  }

  findAll() {
    return this.orderHistory.slice();
  }

  makeOrder(order: Order) {
    return this.http.post(this.makeOrderUrl, order, {headers: this.headers});
  }
}
