import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CorporationService} from '../corporation.service';
import {NotificationService} from '../../notification/notification.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration-driver',
  templateUrl: './registration-driver.component.html',
  styleUrls: ['./registration-driver.component.css']
})
export class RegistrationDriverComponent implements OnInit {
  registrationFormDriver: FormGroup;
  driverFirstName: FormControl;
  driverLastName: FormControl;
  driverEmail: FormControl;

  constructor(private service: CorporationService, private notify: NotificationService, private router: Router) {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.registrationFormDriver.valid) {
      this.service.registerDriver({
        name: this.driverFirstName.value,
        surname: this.driverLastName.value,
        email: this.driverLastName.value
      }).subscribe(() => {
          this.router.navigate(['/corporation']);
          this.notify.success('Driver registered');
        },
        () =>
          this.notify.error('Could not register, try again!'));
    }
  }

  isValid(data: FormControl) {
    return (!data.valid && (data.dirty || data.touched));

  }

  private createFormControls() {
    this.driverFirstName = new FormControl('', [
      Validators.required
    ]),
      this.driverLastName = new FormControl('', [
        Validators.required
      ]),
      this.driverEmail = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]);
  }

  private createForm() {
    this.registrationFormDriver = new FormGroup({
      driverFirstName: this.driverFirstName,
      driverLastName: this.driverLastName,
      driverEmail: this.driverEmail
    });
  }
}
