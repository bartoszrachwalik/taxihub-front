import {Component, OnInit} from '@angular/core';
import {Driver} from '../../driver/driver.model';
import {DriversService} from './drivers.service';


@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css'],
})
export class DriversComponent implements OnInit {
  p: number = 1;
  drivers: Driver[];

  constructor(private driversService: DriversService) {
  }

  ngOnInit() {
    this.driversService.getDrivers().subscribe(data => this.drivers = data);
  }
  pageChanged(event) {
    this.p = event;
  }
}
