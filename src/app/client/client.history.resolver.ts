import {Injectable} from '@angular/core';
import {Resolve} from '@angular/router';

@Injectable()
export class ClientHistoryResolver implements Resolve<any> {

  constructor() {
  }

  resolve() {
    return 'client';
  }
}