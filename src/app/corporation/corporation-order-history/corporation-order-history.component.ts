import {Component, OnInit} from '@angular/core';
import {Order} from '../../shared/order.model';
import {OrderService} from '../../services/order.service';

@Component({
  selector: 'app-corporation-order-history',
  templateUrl: './corporation-order-history.component.html',
  styleUrls: ['./corporation-order-history.component.css']
})
export class CorporationOrderHistoryComponent implements OnInit {

  corporationOrderHistory: Order[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.corporationOrderHistory = this.orderService.findAll();
    this.orderService.historyChanged.subscribe(
      (orders: Order[]) => {
        this.corporationOrderHistory = orders;
      }
    );
  }

}
