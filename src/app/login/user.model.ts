export class User {
  public id: number;
  public email: string;
  public name: string;
  public surname: string;
  public corporationId: number;
  public corpName: string;
  public role: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
