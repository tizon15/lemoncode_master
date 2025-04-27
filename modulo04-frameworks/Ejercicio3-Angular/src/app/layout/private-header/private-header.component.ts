import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-private-header',
  imports: [RouterModule, MatButtonModule, MatIconModule],
  templateUrl: './private-header.component.html',
  styleUrl: './private-header.component.scss'
})
export class PrivateHeaderComponent {
  private loginService = inject(LoginService)
  username = this.loginService.getUserName();
  logout() {
    this.loginService.logout();
  }
}
