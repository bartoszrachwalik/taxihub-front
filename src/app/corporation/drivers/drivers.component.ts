import {Component, OnInit} from '@angular/core';
import {Driver} from '../../shared/driver.model';
import {Car} from '../../shared/car.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  cars: Car[] = [
    new Car(1, 1, 'Honda', 'Civic', 'EBE42EW'),
    new Car(2, 2, 'Mazda', 'RX8', 'DW342ER'),
    new Car(3, 3, 'Nissan', 'Skyline', 'DW34WQ'),
    new Car(4, 4, 'Honda', 'Civic', 'DTR34DS'),
    new Car(5, 5, 'Opel', 'Astra', 'EL34RT'),
  ];

  drivers: Driver[] = [
    new Driver(1, 1, 'Driver 1', 'Driver 1', this.cars[0], 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
    new Driver(2, 1, 'Driver 2', 'Driver 2', this.cars[1], 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
    new Driver(3, 1, 'Driver 3', 'Driver 3', this.cars[2], 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
    new Driver(4, 1, 'Driver 4', 'Driver 4', this.cars[3], 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
    new Driver(5, 1, 'Driver 5', 'Driver 5', this.cars[4], 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
