import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
@Injectable()
export class AuthService {

  constructor(private af: AngularFireAuth) {
  }

  checkAuth(email: string, password: string): Promise<any> {
    return this.af.auth.signInWithEmailAndPassword(email, password);
  }

  getToken(): Observable<any> {
     return this.af.idToken;
  }

}
