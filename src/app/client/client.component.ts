import {Component, OnInit} from '@angular/core';
import {Order} from '../model/order.model';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  activeOrder: Order;

  constructor() {
  }

  ngOnInit() {
  }

  onOrderCreated(order: Order) {
    this.activeOrder = order;
  }

}
