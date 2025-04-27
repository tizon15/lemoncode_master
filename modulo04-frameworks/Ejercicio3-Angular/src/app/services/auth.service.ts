import { effect, inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private route = inject(Router);
  private readonly username: string = 'master@lemoncode.net';
  private readonly password: string = '12345678';
  private readonly authData = localStorage.getItem('authData');
  userLogged = signal(false);
  constructor() {
    effect(() => {
      this.authData;
    });
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === this.username && password === this.password) {
      return of(true).pipe(delay(2000));
    }
    return of(false).pipe(delay(2000));
  }
  logout(): void {
    localStorage.removeItem('authData');
    this.userLogged.set(false);
    this.route.navigate(['/home']);
  }
  isLogged(): boolean {
    if (this.authData) {
      this.userLogged.set(true);
      return true;
    }
    return false ;
  }
  getUserName() {
    if (this.authData) {
      const { username } = JSON.parse(this.authData);
      return username;
    }
  }
}
