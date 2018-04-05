import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Order} from '../../model/order.model';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  @ViewChild('startInput') startPlaceRef: ElementRef;
  @ViewChild('destinationInput') destinationRef: ElementRef;
  @Output() orderCreated = new EventEmitter<Order>();

  constructor() {
  }

  ngOnInit() {
  }

  onOrderCreated(startInput: HTMLInputElement, destinationInput: HTMLInputElement) {
    const newOrder = new Order(1, 1, 'open', this.startPlaceRef.nativeElement.value, this.destinationRef.nativeElement.value);
    this.orderCreated.emit(newOrder);
    return false;
  }

}
