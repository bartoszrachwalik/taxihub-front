import {Component, OnInit} from '@angular/core';
import {Driver} from '../../driver/driver.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Driver[] = [
    new Driver(1, 1, 'Driver 1', 'Driver 1', 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
    new Driver(2, 1, 'Driver 2', 'Driver 2', 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
    new Driver(3, 1, 'Driver 3', 'Driver 3', 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
    new Driver(4, 1, 'Driver 4', 'Driver 4', 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
    new Driver(5, 1, 'Driver 5', 'Driver 5', 'https://c1.staticflickr.com/7/6005/5912538026_f4bfd7bc80_b.jpg'),
  ];

  constructor() {
  }

  ngOnInit() {
  }

}
