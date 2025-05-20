import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  email = '';
  senha = '';
  mensagemErro = '';

  constructor(private http: HttpClient, private router: Router) { }

  fazerLogin() {
    this.mensagemErro = '';
    this.http.post<any>('http://localhost:8080/api/login', {
      email: this.email,
      password: this.senha
    }).subscribe({
      next: (res) => {
        this.router.navigate(['/list']);
      },
      error: (err) => {
        this.mensagemErro = 'Email ou senha inválidos!';
      }
    });
  }
}
