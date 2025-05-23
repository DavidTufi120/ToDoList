import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [CommonModule, FormsModule]
})
export class LoginComponent {
  email = '';
  senha = '';
  mensagemErro = '';
  isRegister = false;

  constructor(private http: HttpClient, private router: Router) { }

  fazerLogin() {
    this.mensagemErro = '';
    this.http.post<any>(`${environment.apiUrl}/api/login`, {
      email: this.email,
      password: this.senha
    }).subscribe({
      next: (res) => {
        localStorage.setItem('token', res.token);
        this.router.navigate(['/list']);
      },
      error: (err) => {
        this.mensagemErro = 'Email ou senha inválidos!';
      }
    });
  }

  register() {
    this.router.navigate(['/signup']);
    this.isRegister = true;
  }
}
