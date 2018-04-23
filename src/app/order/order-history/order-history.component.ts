import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {OrderService} from '../order.service';
import {Order} from '../order.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: Order[];
  p = 1;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
  }

  ngOnInit() {
    if (this.route.snapshot.data.history === 'client')
      this.orderService.getClientsHistory().subscribe(data => this.orderHistory = data);
    if (this.route.snapshot.data.history === 'driver')
      this.orderService.getDriverHistory().subscribe(data => this.orderHistory = data);
    if (this.route.snapshot.data.history === 'corporation')
      this.orderService.getCorporationHistory().subscribe(data => this.orderHistory = data);
  }

  pageChanged(event) {
    this.p = event;
  }
}
