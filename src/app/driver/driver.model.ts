import {Car} from '../car/car.model';

export class Driver {

  public id: number;
  public corporationId: number;
  public name: string;
  public surname: string;
  public email: string;
  public car: Car;
  public imagePath: string;

  constructor(id: number, corporationId: number, name: string, surname: string, email: string, car: Car, imagePath: string) {
    this.id = id;
    this.corporationId = corporationId;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.car = car;
    this.imagePath = imagePath;
  }
}
