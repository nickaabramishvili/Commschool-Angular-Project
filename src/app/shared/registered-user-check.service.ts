import { Injectable } from '@angular/core';
import { User } from './models/user.model';
@Injectable({
  providedIn: 'root',
})
export class RegisteredUserCheckService {
  user: User = {
    firstName: 'john',
    password: '123',
  };

  constructor() {}
  login(firstName: String, password: string): boolean {
    if (firstName == this.user.firstName && password === this.user.password) {
      return true;
    }
    return false;
  }
}
