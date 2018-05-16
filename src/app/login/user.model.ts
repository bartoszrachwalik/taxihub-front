export class User {
  public email: string;
  public name: string;
  public surname: string;
  public corporationId: string;
  public corpName: string;
  public role: string;

  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}
