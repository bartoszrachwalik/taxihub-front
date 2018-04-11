import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ClientService} from "../../client/client.service";


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

  constructor(private clientService: ClientService) {

  }
  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  private onSaveData() {
   console.log(this.clientFirstName.value)
    this.clientService.register( {
      name: this.clientFirstName.value,
      lastName: this.clientLastName.value,
      email: this.clientEmailAddress.value,
      password: this.clientPassword.value
    }).subscribe(
      (val) => {
        console.log("POST call successful value returned in body",
          val);
      },
      response => {
        console.log("POST call in error", response);
      },
      () => {
        console.log("The POST observable is now completed.");
      });
  }
  onSubmit(){
    if(this.registrationClientForm.valid){
      this.onSaveData();
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
