import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  constructor() {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit() {
    if (this.registrationCompanyForm.valid) {
      console.log(this.registrationCompanyForm.value)
      this.registrationCompanyForm.reset();
    }
  }

  isValid(data: FormControl) {
    return (!data.valid && (data.dirty || data.touched));

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
      Validators.minLength(5)
    ]);
    this.companyPasswordConfirmation = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
  }

  private createForm() {
    this.registrationCompanyForm = new FormGroup({
      companyName: this.companyName,
      companyEmail: this.companyEmail,
      companyPassword: this.companyPassword,
      companyPasswordConfirmation: this.companyPasswordConfirmation,
    }, this.passwordMatchValidator)

  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('companyPassword').value === g.get('companyPasswordConfirmation').value
      ? null : {'mismatch': true};
  }
}
