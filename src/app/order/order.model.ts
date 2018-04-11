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
  }

  // constructor(id: number, driverId: number, clientId: number, fromLatitude: number, fromLongitude: number, toLatitude: number,
  //             toLongitude: number, createTime: string, takenTime: string, endTime: string, status: string) {
  //   this.id = id;
  //   this.driverId = driverId;
  //   this.clientId = clientId;
  //   this.fromLatitude = fromLatitude;
  //   this.fromLongitude = fromLongitude;
  //   this.toLatitude = toLatitude;
  //   this.toLongitude = toLongitude;
  //   this.createTime = createTime;
  //   this.takenTime = takenTime;
  //   this.endTime = endTime;
  //   this.status = status;
  // }
}
