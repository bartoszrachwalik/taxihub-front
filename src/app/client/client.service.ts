import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ClientService {

  constructor(private http: HttpClient) { }

  register(client){
    return this.http.post('https://taxihub-backend.herokuapp.com/client', client);

  }
}
