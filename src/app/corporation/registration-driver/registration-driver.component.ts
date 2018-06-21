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
  carMake: FormControl;
  carModel: FormControl;
  carColor: FormControl;
  carPlates: FormControl;

  constructor(private corporationService: CorporationService, private notify: NotificationService, private router: Router) {
  }

  ngOnInit(): void {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.registrationFormDriver.valid) {
      this.corporationService.registerDriver({
        name: this.driverFirstName.value,
        surname: this.driverLastName.value,
        email: this.driverEmail.value,
        corporationId: +localStorage.getItem('id'),
        car: {
          make: this.carMake.value,
          model: this.carModel.value,
          color: this.carColor.value,
          plates: this.carPlates.value
        }
      }).subscribe(() => {
          this.router.navigate(['/corporation']);
          this.notify.success('Driver registered');
        },
        (error) => this.notify.error(error)
      );
    }
  }

  isValid(data: FormControl) {
    return (!data.valid && (data.dirty || data.touched));

  }

  private createFormControls() {
    this.driverFirstName = new FormControl('', [Validators.required]);
    this.driverLastName = new FormControl('', [Validators.required]);
    this.driverEmail = new FormControl('', [Validators.required, Validators.pattern('[^ @]*@[^ @]*')]);
    this.carMake = new FormControl('', [Validators.required]);
    this.carModel = new FormControl('', [Validators.required]);
    this.carColor = new FormControl('', [Validators.required]);
    this.carPlates = new FormControl('', [Validators.required]);
  }

  private createForm() {
    this.registrationFormDriver = new FormGroup({
      driverFirstName: this.driverFirstName,
      driverLastName: this.driverLastName,
      driverEmail: this.driverEmail,
      carMake: this.carMake,
      carModel: this.carModel,
      carColor: this.carColor,
      carPlates: this.carPlates
    });
  }
}
