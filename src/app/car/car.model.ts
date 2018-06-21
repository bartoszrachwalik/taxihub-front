export class Car {
  public id: number;
  public make: string;
  public model: string;
  public color: string;
  public plates: string;
  public driverId: number;

  constructor(id: number, driverId: number, make: string, model: string, color: string, plates: string) {
    this.id = id;
    this.driverId = driverId;
    this.make = make;
    this.model = model;
    this.color = color;
    this.plates = plates;
  }
}
