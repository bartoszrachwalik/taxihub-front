import {Resolve} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable
export class ClientProfileResolver implements Resolve <any> {

  constructor() {
  }

  resolve() {
    return 'client';
  }
}
