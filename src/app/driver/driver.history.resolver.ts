import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {OrderService} from '../order/order.service';
import {Order} from '../order/order.model';

@Injectable()
export class DriverHistoryResolver implements Resolve<Observable<Order[]>> {

  constructor(private orderService: OrderService) {
  }

  resolve() {
    return this.orderService.getDriverHistory();
  }
}
