import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable
export class DriverProfileResolver implements Resolve <any> {

  constructor() {
  }

  resolve() {
    return 'driver';
  }
}
