import {Component, OnInit} from '@angular/core';
import {Order, Order} from '../../shared/order.model';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-client-order-history',
  templateUrl: './client-order-history.component.html',
  styleUrls: ['./client-order-history.component.css']
})
export class ClientOrderHistoryComponent implements OnInit {
  clientOrderHistory: Order[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.clientOrderHistory = this.orderService.findAll();
    this.orderService.historyChanged.subscribe(
      (orders: Order[]) => {
        this.clientOrderHistory = orders;
      }
    );
  }

}
