import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";


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

  constructor() {

  }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  onSubmit(){
    if(this.registrationClientForm.valid){
      console.log(this.registrationClientForm.value)
      this.registrationClientForm.reset();
    }
  }
  isValid(data: FormControl) {
    return (!data.valid && (data.dirty || data.touched));

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
      Validators.minLength(5)
    ]);
    this.clientPasswordConfirmation = new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]);
  }

  private createForm() {
    this.registrationClientForm = new FormGroup({
      clientFirstName: this.clientFirstName,
      clientLastName: this.clientLastName,
      clientEmail: this.clientEmailAddress,
      clientPassword: this.clientPassword,
      clientPasswordConfirmation: this.clientPasswordConfirmation,
    }, this.passwordMatchValidator)

  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('clientPassword').value === g.get('clientPasswordConfirmation').value
      ? null : {'mismatch': true};
  }
}
