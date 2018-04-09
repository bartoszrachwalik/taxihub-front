export class Order {
  public id: number;
  public driverId: number;
  public client_id: number;
  public status: string;
  public startPlace: string;
  public destination: string;
  public startTime: string;
  public endTime: string;

  constructor(id: number, client_id: number, status: string, startPlace: string, destination: string) {
    this.id = id;
    this.client_id = client_id;
    this.status = status;
    this.startPlace = startPlace;
    this.destination = destination;
  }
}
