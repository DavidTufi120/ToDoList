import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  mensagemErro = '';
  usuarioLogado = false;
  nomeUsuario = '';

  constructor(
    public auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      this.usuarioLogado = isAuthenticated;
      if (isAuthenticated) {
        this.auth.user$.subscribe(user => {
          this.nomeUsuario = user?.name || '';
          this.router.navigate(['/list']);
        });
      }
    });
  }

  fazerLogin() {
    this.auth.loginWithRedirect();
  }
}
