import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ClientService} from '../../client/client.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../notification/notification.service';

@Component({
  selector: 'app-registration-client',
  templateUrl: './registration-client.component.html',
  styleUrls: ['./registration-client.component.css']
})
export class RegistrationClientComponent implements OnInit {
  registrationClientForm: FormGroup;
  clientFirstName: FormControl;
  clientLastName: FormControl;
  clientEmailAddress: FormControl;
  clientPassword: FormControl;
  clientPasswordConfirmation: FormControl;

  constructor(private clientService: ClientService, private router: Router, private notify: NotificationService) {
  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.registrationClientForm.valid) {
      this.clientService.register({
        name: this.clientFirstName.value,
        surname: this.clientLastName.value,
        email: this.clientEmailAddress.value,
        password: this.clientPassword.value
      }).subscribe(() => {
          this.router.navigate(['']);
          this.notify.success('User registered');
        },
        () => this.notify.error('Could not register, try again!'));
    }
  }

  isValid(data: FormControl) {
    return (!data.valid && (data.dirty || data.touched));

  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('clientPassword').value === g.get('clientPasswordConfirmation').value
      ? null : {'mismatch': true};
  }

  private createFormControls() {
    this.clientFirstName = new FormControl('', Validators.required);
    this.clientLastName = new FormControl('', Validators.required);
    this.clientEmailAddress = new FormControl('', [
      Validators.required,
      Validators.pattern("[^ @]*@[^ @]*")
    ]);
    this.clientPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.clientPasswordConfirmation = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
  }

  private createForm() {
    this.registrationClientForm = new FormGroup({
      clientFirstName: this.clientFirstName,
      clientLastName: this.clientLastName,
      clientEmail: this.clientEmailAddress,
      clientPassword: this.clientPassword,
      clientPasswordConfirmation: this.clientPasswordConfirmation,
    }, this.passwordMatchValidator);
  }
}
