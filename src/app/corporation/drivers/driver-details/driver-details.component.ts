import {Component, Input, OnInit} from '@angular/core';
import {Driver} from '../../../driver/driver.model';

@Component({
  selector: 'app-driver-details',
  templateUrl: './driver-details.component.html',
  styleUrls: ['./driver-details.component.css']
})
export class DriverDetailsComponent implements OnInit {
  @Input() driver: Driver;

  constructor() {
  }

  ngOnInit() {
  }

}
