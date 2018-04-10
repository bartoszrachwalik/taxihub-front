export class Order {
  public id: number;
  public driverId: number;
  public clientId: number;
  public fromLatitude: number;
  public fromLongitude: number;
  public toLatitude: number;
  public toLongitude: number;
  public createTime: string;
  public takenTime: string;
  public endTime: string;
  public status: string;

  constructor(clientId: number, fromLatitude: number, fromLongitude: number, toLatitude: number, toLongitude: number) {
    this.clientId = clientId;
    this.fromLatitude = fromLatitude;
    this.fromLongitude = fromLongitude;
    this.toLatitude = toLatitude;
    this.toLongitude = toLongitude;
    this.status = 'open';
  }
}
