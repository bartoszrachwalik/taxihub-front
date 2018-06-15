import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../order.service';
import {Order} from '../order.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css'],
  providers: [OrderService]
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: Order[];
  p = 1;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
  }

  ngOnInit() {
    if (localStorage.getItem('user') === 'client')
      this.orderService.getClientsHistory().subscribe((data: Order[]) => this.orderHistory = data);
    if (localStorage.getItem('user') === 'driver')
      this.orderService.getDriverHistory().subscribe((data: Order[]) => this.orderHistory = data);
    if (localStorage.getItem('user') === 'corporation')
      this.orderService.getCorporationHistory().subscribe((data: Order[]) => this.orderHistory = data);
  }

  pageChanged(event) {
    this.p = event;
  }
}
