import {Injectable} from '@angular/core';
import {ToasterService} from 'angular5-toaster/dist';

@Injectable()
export class NotificationService {

  constructor(private toasterService: ToasterService) {
  }

  success(text: string, title?: string) {
    this.toasterService.pop('success', title ? title : 'Success', text);
  }

  info(text: string, title?: string) {
    this.toasterService.pop('info', title ? title : 'Information', text);
  }

  error(error: any, title?: string) {
    let errors = '';
    for (const message of error.error) {
      errors += message['description'] + '\n';
    }
    this.toasterService.pop('error', title ? title : 'Error', errors);
  }
}
