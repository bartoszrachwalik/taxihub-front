import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../order/order.model';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';
import {OrderService} from '../../order/order.service';
import {NotificationService} from '../../notification/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css'],
  providers: [OrderService]
})
export class MakeOrderComponent implements OnInit {
  @ViewChild('searchFrom') startPlaceRef: ElementRef;
  @ViewChild('searchTo') destinationRef: ElementRef;
  clientId = 20;
  hasActiveOrder = false;
  order: Order;

  public zoom = 1;

  autocompleteFrom;
  autocompleteTo;
  dir;

  constructor(private mapsAPILoader: MapsAPILoader,
              private orderService: OrderService,
              private notificationService: NotificationService,
              private router: Router) {
  }

  private static toCoordinates(autocomplete) {
    const loc = autocomplete.getPlace().geometry.location;
    return {lat: loc.lat(), lng: loc.lng()};
  }

  ngOnInit() {
    this.orderService.checkActiveOrder().subscribe((hasActiveOrder: boolean) => {
      this.hasActiveOrder = hasActiveOrder;
    });
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

  onOrderCreated() {
    this.order = new Order(this.clientId, this.dir.origin.lat, this.dir.origin.lng, this.dir.destination.lat, this.dir.destination.lng);
    this.orderService.makeOrder(this.order).subscribe(res => this.notificationService.success('Order added successfully!'));
    return false;
  }

  goToActiveOrder() {
    this.router.navigate(['/client/active-order']);
  }
}
