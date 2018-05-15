import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable
export class CorporationProfileResolver implements Resolve <any> {

  constructor() {
  }

  resolve() {
    return 'corporation';
  }
}
