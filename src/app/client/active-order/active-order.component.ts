import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../order/order.service';
import {NotificationService} from '../../notification/notification.service';
import {Order} from '../../order/order.model';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
  activeOrder: Order;
  dir;
  public zoom = 1;

  constructor(private mapsAPILoader: MapsAPILoader, private orderService: OrderService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.orderService.getActiveOrder().subscribe((data: Order) => {
        this.activeOrder = data;
        const origin = {lat: this.activeOrder.fromLatitude, lng: this.activeOrder.fromLongitude};
        const destination = {lat: this.activeOrder.toLatitude, lng: this.activeOrder.toLongitude};
        this.dir = {origin, destination};
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
