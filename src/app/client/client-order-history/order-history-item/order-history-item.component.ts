import {Component, Input, OnInit} from '@angular/core';
import {Order} from '../../../order/order.model';

@Component({
  selector: 'app-order-history-item',
  templateUrl: './order-history-item.component.html',
  styleUrls: ['./order-history-item.component.css']
})
export class OrderHistoryItemComponent implements OnInit {
  @Input() order: Order;

  constructor() {
  }

  ngOnInit() {
  }

}
