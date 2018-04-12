import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../order/order.model';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';
import {OrderService} from '../../order/order.service';
import {NotificationService} from '../../notification/notification.service';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  @ViewChild('searchFrom') startPlaceRef: ElementRef;
  @ViewChild('searchTo') destinationRef: ElementRef;
  activeOrder: Order;
  hasActiveOrder = false;

  public latitudeOrigin: number;
  public longitudeOrigin: number;
  public latitudeDestination: number;
  public longitudeDestination: number;
  public zoom = 12;

  autocompleteFrom;
  autocompleteTo;
  dir;

  constructor(private mapsAPILoader: MapsAPILoader,
              private orderService: OrderService,
              private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.autocompleteFrom = new google.maps.places.Autocomplete(this.startPlaceRef.nativeElement, {
        types: ['address']
      });
    });
    this.mapsAPILoader.load().then(() => {
      this.autocompleteTo = new google.maps.places.Autocomplete(this.destinationRef.nativeElement, {
        types: ['address']
      });
    });
  }

  getDirection() {
    const origin = MakeOrderComponent.toCoordinates(this.autocompleteFrom);
    const destination = MakeOrderComponent.toCoordinates(this.autocompleteTo);
    this.dir = {origin, destination};
  }

  private static toCoordinates(autocomplete) {
    const loc = autocomplete.getPlace().geometry.location;
    return {lat: loc.lat(), lng: loc.lng()};
  }

  onOrderCreated() {
    if (!this.hasActiveOrder) {
      this.hasActiveOrder = true;
      // todo how to input correct clientID
      this.activeOrder = new Order(1, this.latitudeOrigin, this.longitudeOrigin, this.latitudeDestination, this.longitudeDestination);
      this.orderService.makeOrder(this.activeOrder).subscribe(res => this.notificationService.success('Order added successfully!'));
    }
    return false;
  }
}
