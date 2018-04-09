import {Component, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {OrderHistoryService} from '../../services/order-history.service';

@Component({
  selector: 'app-driver-order-history',
  templateUrl: './driver-order-history.component.html',
  styleUrls: ['./driver-order-history.component.css']
})
export class DriverOrderHistoryComponent implements OnInit {

  driverOrderHistory: Order[];

  constructor(private orderHistoryService: OrderHistoryService) {
  }

  ngOnInit() {
    this.driverOrderHistory = this.orderHistoryService.findAll();
    this.orderHistoryService.historyChanged.subscribe(
      (orders: Order[]) => {
        this.driverOrderHistory = orders;
      }
    );
  }

}
