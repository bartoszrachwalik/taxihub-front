import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../model/order.model';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  @ViewChild('startInput') startPlaceRef: ElementRef;
  @ViewChild('destinationInput') destinationRef: ElementRef;
  activeOrder: Order;
  isOrderActive = false;

  constructor() {
  }

  ngOnInit() {
  }

  onOrderCreated(startInput: HTMLInputElement, destinationInput: HTMLInputElement) {
    if (!this.isOrderActive) {
      this.isOrderActive = true;
      this.activeOrder = new Order(1, 1, 'open', this.startPlaceRef.nativeElement.value, this.destinationRef.nativeElement.value);
    }
    return false;
  }

  onCancelOrder() {
    this.isOrderActive = false;
  }
}
