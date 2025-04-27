import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private route = inject(Router);
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
    this.route.navigate(['/home'])
  }
  isLogged(): boolean {
    return this.isLoggedIn();
  }
  getUserName() {
    return this.username;
  }
}
