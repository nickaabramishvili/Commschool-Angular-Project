import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root',
})
export class RegisteredUserCheckService {
  userIsLogged: boolean = false;
  user: User = {
    firstName: 'john',
    password: '123',
  };

  constructor() {}
  login(firstName: String, password: string): boolean {
    if (firstName == this.user.firstName && password === this.user.password) {
      this.userIsLogged = true;
      localStorage.setItem('userIsLogged', 'true');
      return true;
    }
    localStorage.setItem('userIsLogged', 'false');
    return false;
    // localstoregesh ivianxavt application/damere localstoreges vnaxavt devtoolidan
  }
}
