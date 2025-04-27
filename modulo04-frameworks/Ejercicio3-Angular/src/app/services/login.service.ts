import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  isLoggedIn = signal(false);
  private username: string = 'master@lemoncode.net';
  private password: string = '12345678';
  constructor() {}

  login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      this.isLoggedIn.set(true);
      return true;
    }
    this.isLoggedIn.set(false);
    return false;
  }
  logout() {
    this.isLoggedIn.set(false);
    return true;
  }
  isLogged(): boolean {
    return this.isLoggedIn();
  }
  getUserName() {
    return this.username;
  }
}
