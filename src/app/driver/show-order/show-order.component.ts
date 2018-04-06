import {Component, OnInit} from '@angular/core';
import {Order} from '../../model/order.model';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  orders: Order[] = [
    new Order(1, 1, 'open', 'Start place 1', 'Destination 1'),
    new Order(2, 2, 'open', 'Start place 2', 'Destination 2'),
    new Order(3, 3, 'open', 'Start place 3', 'Destination 3'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
