import {Component, OnInit} from '@angular/core';
import {Order} from '../order.model';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  orderHistory: Order[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.orderHistory = this.route.snapshot.data.history;
  }

}
