import { Component, effect, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-private-header',
  imports: [RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {
  private loginService = inject(AuthService)
  username!:string
  constructor(){
    effect(() => {
      this.loginService.isLogged() // Check if the user is logged in
      this.username = this.loginService.getUserName(); // Get the username from the AuthService
    })
  }
  logout() {
    this.loginService.logout();
  }
}
