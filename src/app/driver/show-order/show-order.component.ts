import {Component, OnInit} from '@angular/core';
import {OrderService} from '../../order/order.service';
import {Order} from '../../order/order.model';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.css']
})
export class ShowOrderComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService) {
  }

  ngOnInit() {
    this.orderService.getOpenOrderForDriver().subscribe(data => this.orders = data);
  }

}
