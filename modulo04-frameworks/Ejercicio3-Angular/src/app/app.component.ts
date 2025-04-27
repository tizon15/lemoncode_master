import { LoginService } from './services/login.service';
import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PublicHeaderComponent, PrivateHeaderComponent, MatSnackBarModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'Ejercicio3-Angular';
  private loginService = inject(LoginService)
  isLoggedIn = this.loginService.isLoggedIn();
  constructor(){
    effect(() => {
      this.isLoggedIn = this.loginService.isLoggedIn();
    })
  }
}
