import {Order} from '../model/order.model';
import {EventEmitter} from '@angular/core';

export class OrderHistoryService {
  historyChanged = new EventEmitter<Order[]>();
  orderHistory: Order[] = [];

  addToHistory(order: Order) {
    this.orderHistory.push(order);
    this.historyChanged.emit(this.orderHistory.slice());
  }

  getHistory() {
    return this.orderHistory.slice();
  }

}
