import {Component, OnInit} from '@angular/core';
import {Order} from '../../order/order.model';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
  activeOrder: Order[];

  constructor() {
  }

  ngOnInit() {
  }

  onCancelOrder() {

  }
}
