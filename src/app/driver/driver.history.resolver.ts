import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

@Injectable()
export class DriverHistoryResolver implements Resolve<any> {

  constructor() {
  }

  resolve() {
    return 'driver';
  }
}
