import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

@Injectable()
export class CorporationHistoryResolver implements Resolve<any> {

  constructor() {
  }

  resolve() {
    return 'corporation';
  }
}
