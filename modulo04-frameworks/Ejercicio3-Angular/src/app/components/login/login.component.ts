import { CommonModule } from '@angular/common';
import {
  Component,
  inject,
  OnInit,
  signal,
  ViewEncapsulation,
} from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class LoginComponent implements OnInit {
  private loginService = inject(AuthService);
  loading = false;
  private fb = inject(FormBuilder);
  private route = inject(Router);
  private snackBar = inject(MatSnackBar);
  form = this.fb.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });
  hide = signal(true);
  get username() {
    return this.form.controls['username'];
  }
  get password() {
    return this.form.controls['password'];
  }
  errorMessage = signal('');

  constructor() {}
  ngOnInit(): void {
    this.snackBar.open('master@lemoncode.net\n12345678', '❌', {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 0,
    });
  }

  updateErrorMessage() {
    if (
      this.username.hasError('required') ||
      this.password.hasError('required')
    ) {
      this.errorMessage.set('You must enter a value');
    } else if (this.username.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
  handleLogin() {
    const { username, password } = this.form.value;
    this.loading = true;
    this.loginService.login(username!, password!).subscribe({
      next: (response) => {
        this.loading = false;
        if (!response) {
          this.snackBar.open('Invalid credentials', '❌', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 5000,
            panelClass: ['snackbar-error'],
          });
        } else {
          localStorage.setItem(
            'authData',
            JSON.stringify({ username, password })
          );
          this.loginService.userLogged.set(true);
          this.route.navigate(['/dashboard']);
        }
      },
    });
  }
}
