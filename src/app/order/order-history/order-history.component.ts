import {Component, OnInit} from '@angular/core';
import {Order} from '../order.model';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: Order[];
  clientId: number;
  corporationId: number;
  driverId: number;

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderHistory = this.orderService.findAll();
    this.orderService.historyChanged.subscribe(
      (orders: Order[]) => {
        this.orderHistory = orders;
      }
    );
  }

}
