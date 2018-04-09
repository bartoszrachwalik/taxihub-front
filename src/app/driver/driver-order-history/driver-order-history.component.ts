import {Component, OnInit} from '@angular/core';
import {Order} from '../../shared/order.model';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-driver-order-history',
  templateUrl: './driver-order-history.component.html',
  styleUrls: ['./driver-order-history.component.css']
})
export class DriverOrderHistoryComponent implements OnInit {

  driverOrderHistory: Order[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.driverOrderHistory = this.orderService.findAll();
    this.orderService.historyChanged.subscribe(
      (orders: Order[]) => {
        this.driverOrderHistory = orders;
      }
    );
  }

}
