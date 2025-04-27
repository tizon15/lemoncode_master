import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private route = inject(Router);
  isLoggedIn = signal(false);
  private readonly username: string = 'master@lemoncode.net';
  private readonly password: string = '12345678';
  private readonly authData = localStorage.getItem('authData');
  constructor() {
    effect(() => {
      this.authData;
    });
  }

  login(username: string, password: string): boolean {
    if (username === this.username && password === this.password) {
      this.isLoggedIn.set(true);
      localStorage.setItem('authData', JSON.stringify({ username, password }));
      this.route.navigate(['/dashboard']);
      return true;
    }
    this.isLoggedIn.set(false);
    return false;
  }
  logout() {
    localStorage.removeItem('authData');
    this.isLoggedIn.set(false);
    this.route.navigate(['/home']);
  }
  isLogged(): boolean {
    if (this.authData) {
      const { username, password } = JSON.parse(this.authData);
      return this.login(username, password);
    }
    return this.isLoggedIn();
  }
  getUserName() {
    if (this.authData) {
      const { username } = JSON.parse(this.authData);
      return username;
    }
  }
}
