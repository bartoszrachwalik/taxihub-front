export class Order {
  public id: number;
  public driverId: number;
  public client_id: number;
  public status: string;
  public startPlace: string;
  public destination: string;
  public startTime: string;
  public endTime: string;

  constructor(id: number, driverId: number, client_id: number, status: string,
              startPlace: string, destination: string, startTime: string, endTime: string) {
    this.id = id;
    this.driverId = driverId;
    this.client_id = client_id;
    this.status = status;
    this.startPlace = startPlace;
    this.destination = destination;
    this.startTime = startTime;
    this.endTime = endTime;
  }
}
