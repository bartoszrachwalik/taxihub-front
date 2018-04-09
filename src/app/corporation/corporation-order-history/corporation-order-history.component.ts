import {Component, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';
import {OrderHistoryService} from '../../services/order-history.service';

@Component({
  selector: 'app-corporation-order-history',
  templateUrl: './corporation-order-history.component.html',
  styleUrls: ['./corporation-order-history.component.css']
})
export class CorporationOrderHistoryComponent implements OnInit {

  corporationOrderHistory: Order[];

  constructor(private orderHistoryService: OrderHistoryService) {
  }

  ngOnInit() {
    this.corporationOrderHistory = this.orderHistoryService.findAll();
    this.orderHistoryService.historyChanged.subscribe(
      (orders: Order[]) => {
        this.corporationOrderHistory = orders;
      }
    );
  }

}
