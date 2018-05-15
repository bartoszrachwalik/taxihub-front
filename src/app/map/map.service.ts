import {Injectable} from '@angular/core';
import {Order} from '../order/order.model';

@Injectable()
export class MapService {

  constructor() {
  }

  getDirection(order: Order) {
    const origin = {lat: order.fromLatitude, lng: order.fromLongitude};
    const destination = {lat: order.toLatitude, lng: order.toLongitude};
    return {origin, destination};
  }

  // geocodeLocation(lat: number, lng: number) {
  //   const geo = new google.maps.Geocoder();
  //   const latlng = new google.maps.LatLng(lat, lng);
  //   geo.geocode({
  //       'latLng': latlng
  //     }, function (results, status) {
  //       if (status === google.maps.GeocoderStatus.OK) {
  //         if (results[1]) {
  //           return results[1].formatted_address;
  //         } else {
  //           alert('No results found');
  //         }
  //       } else {
  //         alert('Geocoder failed due to: ' + status);
  //       }
  //     }
  //   );
  // }

}
