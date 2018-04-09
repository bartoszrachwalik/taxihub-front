import {Component, OnInit} from '@angular/core';
import {Order, Order} from '../../model/order.model';
import {OrderHistoryService} from '../../services/order-history.service';

@Component({
  selector: 'app-client-order-history',
  templateUrl: './client-order-history.component.html',
  styleUrls: ['./client-order-history.component.css']
})
export class ClientOrderHistoryComponent implements OnInit {
  clientOrderHistory: Order[];

  constructor(private orderHistoryService: OrderHistoryService) {
  }

  ngOnInit() {
    this.clientOrderHistory = this.orderHistoryService.findAll();
    this.orderHistoryService.historyChanged.subscribe(
      (orders: Order[]) => {
        this.clientOrderHistory = orders;
      }
    );
  }

}
