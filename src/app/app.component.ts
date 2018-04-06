import {ToasterService} from "./popupservice/toaster-service.service";
import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private toasterService: ToasterService) {}

  Success() {
    this.toasterService.Success('Success button clicked');
  }
  Info() {
    this.toasterService.Info ('Info button clicked');
  }
  Error() {
    this.toasterService.Error('Error button clicked');
  }

}
