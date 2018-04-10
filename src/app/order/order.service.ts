import {Order} from '../order/order.model';
import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class OrderService {
  historyChanged = new EventEmitter<Order[]>();
  orderHistory: Order[];

  constructor(private http: HttpClient) {
  }

  addToOrderHistory(order: Order) {
    this.orderHistory.push(order);
    this.historyChanged.emit(this.orderHistory.slice());
  }

  // todo
  // getHistory(id: number, role: string) {
  //   this.http.get('https://taxihub-backend.herokuapp.com/orders/open');
  // }

  findAll() {
    return this.orderHistory.slice();
  }

  makeOrder(order: Order) {
    return this.http.post('https://taxihub-backend.herokuapp.com/orders', order);
  }
}
