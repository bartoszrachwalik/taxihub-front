import {Component, OnInit} from '@angular/core';
import {Driver} from '../../driver/driver.model';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
  drivers: Driver[] = [
    new Driver(1, 1, 'driver1', 'driver1'),
    new Driver(2, 4, 'driver2', 'driver2'),
    new Driver(3, 5, 'driver3', 'driver3'),
  ]

  constructor() {
  }

  ngOnInit() {
  }

}
