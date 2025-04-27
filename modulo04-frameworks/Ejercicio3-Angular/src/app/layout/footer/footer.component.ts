import { Component, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-footer',
  imports: [RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  title = 'Ejercicio3 - Angular';
  private authService = inject(AuthService);
  isLoggedIn = this.authService.userLogged;
  constructor() {
    effect(() => {
      this.isLoggedIn();
      console.log(this.isLoggedIn());
    });
  }
}
