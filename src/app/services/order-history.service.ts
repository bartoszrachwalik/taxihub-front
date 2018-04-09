import {Order} from '../model/order.model';
import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class OrderHistoryService {
  historyChanged = new EventEmitter<Order[]>();
  orderHistory: Order[] = [];

  constructor() {
  }

  addToOrderHistory(order: Order) {
    this.orderHistory.push(order);
    this.historyChanged.emit(this.orderHistory.slice());
  }

  findAll() {
    return this.orderHistory.slice();
  }

}
