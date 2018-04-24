import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CorporationService} from '../../corporation/corporation.service';
import {Router} from '@angular/router';
import {NotificationService} from '../../notification/notification.service';


@Component({
  selector: 'app-registration-company',
  templateUrl: './registration-company.component.html',
  styleUrls: ['./registration-company.component.css']
})
export class RegistrationCompanyComponent implements OnInit {
  registrationCompanyForm: FormGroup;
  companyName: FormControl;
  companyEmail: FormControl;
  companyPassword: FormControl;
  companyPasswordConfirmation: FormControl;

  constructor(private corporationService: CorporationService, private router: Router, private notify: NotificationService) {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.registrationCompanyForm.valid) {
      this.corporationService.register({
        name: this.companyName.value,
        email: this.companyEmail.value,
        password: this.companyPassword.value
      }).subscribe(() => {
          this.router.navigate(['']);
          this.notify.success('Corporation registered');
        },
        () =>
          this.notify.error('Could not register, try again!'));
    }
  }

  isValid(data: FormControl) {
    return (!data.valid && (data.dirty || data.touched));

  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('companyPassword').value === g.get('companyPasswordConfirmation').value
      ? null : {'mismatch': true};
  }

  private createFormControls() {
    this.companyName = new FormControl('', [
      Validators.required
    ]),
      this.companyEmail = new FormControl('', [
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ]);
    this.companyPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
    this.companyPasswordConfirmation = new FormControl('', [
      Validators.required,
      Validators.minLength(6)
    ]);
  }

  private createForm() {
    this.registrationCompanyForm = new FormGroup({
      companyName: this.companyName,
      companyEmail: this.companyEmail,
      companyPassword: this.companyPassword,
      companyPasswordConfirmation: this.companyPasswordConfirmation,
    }, this.passwordMatchValidator);
  }
}
