import {Component, ElementRef, NgZone, OnInit, ViewChild} from '@angular/core';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-make-order',
  templateUrl: './make-order.component.html',
  styleUrls: ['./make-order.component.css']
})
export class MakeOrderComponent implements OnInit {

  public latitudeOrigin: number;
  public longitudeOrigin: number;
  public latitudeDestination: number;
  public longitudeDestination: number;
  public zoom = 12;

  @ViewChild('searchFrom')
  public searchFrom: ElementRef;
  @ViewChild('searchTo')
  public searchTo: ElementRef;

  autocompleteFrom;
  autocompleteTo;
  dir;

  constructor(private mapsAPILoader: MapsAPILoader) {
  }

  ngOnInit() {
    this.mapsAPILoader.load().then(() => {
      this.autocompleteFrom = new google.maps.places.Autocomplete(this.searchFrom.nativeElement, {
        types: ['address']
      });
    });
    this.mapsAPILoader.load().then(() => {
      this.autocompleteTo = new google.maps.places.Autocomplete(this.searchTo.nativeElement, {
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
}
