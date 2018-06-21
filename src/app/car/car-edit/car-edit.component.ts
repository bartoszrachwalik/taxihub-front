import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarService} from '../car.service';
import {Car} from '../car.model';
import {NotificationService} from '../../notification/notification.service';

@Component({
  selector: 'app-car-edit',
  templateUrl: './car-edit.component.html',
  styleUrls: ['./car-edit.component.css'],
  providers: [CarService]
})
export class CarEditComponent implements OnInit {
  carEditForm: FormGroup;

  constructor(private carService: CarService, private notificationService: NotificationService) {
  }

  ngOnInit() {
    this.carService.getCar().subscribe(
      (response: Car) => {
        this.carEditForm = new FormGroup({
          'make': new FormControl(response.make, [Validators.required]),
          'model': new FormControl(response.model, [Validators.required]),
          'color': new FormControl(response.color, [Validators.required]),
          'plates': new FormControl(response.plates, [Validators.required]),
        });
      }
    );
  }

  onSubmit() {
    this.carService.updateCar(this.carEditForm.value).subscribe(
      () => this.notificationService.success('Car successfully updated!'),
      (error) => this.notificationService.error(error)
    );
  }
}
