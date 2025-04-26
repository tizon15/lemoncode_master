import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private username: string = 'master@lemoncode.net';
  private password: string = '12345678';
  constructor() {}

  login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      return true;
    }
    return false;
  }
  logout() {
    return true;
  }
  isLogged() {
    return true;
  }
  getUserName() {
    return 'XXXXXXXXXXXXXXX';
  }
}
