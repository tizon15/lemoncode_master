import { CommonModule } from '@angular/common';
import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { LoginService } from '../../services/login.service';
@Component({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private loginService = inject(LoginService);
  private fb = inject(FormBuilder);
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

  updateErrorMessage() {
    if (this.username.hasError('required') || this.password.hasError('required')) {
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
    this.loginService.login(username!, password!);
  }
}
