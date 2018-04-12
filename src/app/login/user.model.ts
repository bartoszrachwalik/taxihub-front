export class User {
  public email: string;
  public name: string;
  public role: string;

  constructor(email: string, name: string, role: string) {
    this.email = email;
    this.name = name;
    this.role = role;
  }
}
