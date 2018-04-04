export class Car {
  public id: number;
  public type: string;
  public model: string;
  public plates: string;
  public driverId: number;

  constructor(id: number, driverId: number, type: string, model: string, plates: string) {
    this.id = id;
    this.driverId = driverId;
    this.type = type;
    this.model = model;
    this.plates = plates;
  }
}
