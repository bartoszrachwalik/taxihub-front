import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {Order} from '../../model/order.model';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {
  @ViewChild('searchFrom') startPlaceRef: ElementRef;
  @ViewChild('searchTo') destinationRef: ElementRef;
  activeOrder: Order;
  isOrderActive = false;

  public latitudeOrigin: number;
  public longitudeOrigin: number;
  public latitudeDestination: number;
  public longitudeDestination: number;
  public zoom = 12;


  autocompleteFrom;
  autocompleteTo;
  dir;

  constructor(private mapsAPILoader: MapsAPILoader) {
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
  onOrderCreated(startInput: HTMLInputElement, destinationInput: HTMLInputElement) {
    if (!this.isOrderActive) {
      this.isOrderActive = true;
      this.activeOrder = new Order(1, 1, 'open', this.startPlaceRef.nativeElement.value, this.destinationRef.nativeElement.value);
    }
    return false;
  }
}
