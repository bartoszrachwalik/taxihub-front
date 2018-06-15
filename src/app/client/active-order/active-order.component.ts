import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../order/order.service';
import {NotificationService} from '../../notification/notification.service';
import {Order} from '../../order/order.model';
import {MapService} from '../../map/map.service';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css'],
  providers: [OrderService]
})
export class ActiveOrderComponent implements OnInit {
  activeOrder: Order;
  dir;

  constructor(private orderService: OrderService,
              private notificationService: NotificationService,
              private mapService: MapService) {
  }

  ngOnInit() {
    this.orderService.getActiveOrder().subscribe((order: Order) => {
        this.activeOrder = order;
        this.dir = this.mapService.getDirection(this.activeOrder);
      }
    );
  }

  onCancelOrder() {
    if (this.activeOrder !== null) {
      this.orderService.cancelOrder(this.activeOrder.id).subscribe(
        res => this.notificationService.success('Order cancelled successfully!'));
    } else {
      this.notificationService.error('There is no order to cancel!');
    }
    return false;
  }
}
