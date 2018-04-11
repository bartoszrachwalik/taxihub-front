import {Component, OnInit} from '@angular/core';
import {Order} from '../../order/order.model';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  orders: Order[] = [
    new Order(1, 1, 1, 1, 1),
    new Order(1, 1, 1, 1, 1),
    new Order(1, 1, 1, 1, 1)
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
