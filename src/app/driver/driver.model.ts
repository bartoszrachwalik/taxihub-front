export class Driver {
  public id: number;
  public corporationId: number;
  public name: string;
  public surname: string;

  constructor(id: number, corporationId: number, name: string, surname: string) {
    this.id = id;
    this.corporationId = corporationId;
    this.name = name;
    this.surname = surname;
  }
}
