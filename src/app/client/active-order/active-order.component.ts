import {Component, OnInit} from '@angular/core';
import {Order} from '../../order/order.model';
import {OrderService} from '../../order/order.service';
import {NotificationService} from '../../notification/notification.service';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
  activeOrder: Order;

  constructor(private orderService: OrderService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.orderService.getActiveOrder().subscribe(data => this.activeOrder = {...data});
  }

  onCancelOrder() {
    if (this.activeOrder !== null) {
      this.orderService.cancelOrder(this.activeOrder.id).subscribe(res => this.notificationService.success('Order cancelled successfully!'));
    } else {
      this.notificationService.error('There is no order to cancel!');
    }
    return false;
  }
}
