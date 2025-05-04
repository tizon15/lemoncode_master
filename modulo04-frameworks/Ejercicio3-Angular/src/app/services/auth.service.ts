import { effect, inject, Injectable, signal, computed } from '@angular/core';
import { Router } from '@angular/router';
import { delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private route = inject(Router);
  private readonly username: string = 'master@lemoncode.net';
  // amazonq-ignore-next-line
  private readonly password: string = '12345678';
  private authState = signal<{ username: string; password: string } | null>(
    JSON.parse(localStorage.getItem('authData') || 'null')
  );
  userLogged = computed(() => !!this.authState());
  constructor() {
  }

  login(username: string, password: string): Observable<boolean> {
    if (username === this.username && password === this.password) {
      return of(true).pipe(
        delay(2000),
        tap(() => {
          const authData = { username, password };
          localStorage.setItem('authData', JSON.stringify(authData));
          this.authState.set(authData);
        })
      );
    }
    return of(false).pipe(delay(2000));
  }
  logout(): void {
    localStorage.removeItem('authData');
    this.authState.set(null);
    this.route.navigate(['/home']);
  }
  isLogged(): boolean {
    return this.userLogged();
  }
  getUserName() {
    return this.authState()?.username || '';
  }
}
