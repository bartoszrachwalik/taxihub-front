import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../order/order.model';

@Component({
  selector: 'app-active-order',
  templateUrl: './active-order.component.html',
  styleUrls: ['./active-order.component.css']
})
export class ActiveOrderComponent implements OnInit {
  @ViewChild('searchFrom') startPlaceRef: ElementRef;
  @ViewChild('searchTo') destinationRef: ElementRef;
  activeOrder: Order;
  isOrderActive = false;
  constructor() { }

  ngOnInit() {
  }

  onCancelOrder() {
    this.isOrderActive = false;
  }
}
