import { AuthService } from './services/auth.service';
import { Component, effect, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PublicHeaderComponent } from './layout/public-header/public-header.component';
import { PrivateHeaderComponent } from './layout/private-header/private-header.component';
import { FooterComponent } from "./layout/footer/footer.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PublicHeaderComponent, PrivateHeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'

})
export class AppComponent {
  title = 'Ejercicio3-Angular';
  private loginService = inject(AuthService)
  isLoggedIn = this.loginService.userLogged;
  constructor(){
    this.loginService.isLogged()
    effect(() => {
      this.isLoggedIn()
    })
  }
}
