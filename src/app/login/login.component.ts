import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  name = '';
  email = '';
  password = '';
  mensagemErro = '';
  usuarioLogado = false;
  nomeUsuario = '';

  private readonly usuarioBanco = {
    email: 'admin@admin.com',
    password: 'admin',
    nome: 'Admin'
  };

  ngOnInit() {
    this.verificarLogin();
  }

  fazerLogin() {
    const { email, password, nome } = this.usuarioBanco;

    if (this.email === email && this.password === password) {
      const usuario = { email, nome };
      localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
      this.usuarioLogado = true;
      this.nomeUsuario = nome;
      this.mensagemErro = '';
      this.router.navigate(['/list']);
    } else {
      this.mensagemErro = 'Login incorreto. Tente novamente.';
      this.usuarioLogado = false;
    }
  }

  verificarLogin() {
    const usuarioSalvo = localStorage.getItem('usuarioLogado');
    if (usuarioSalvo) {
      const usuario = JSON.parse(usuarioSalvo);
      this.usuarioLogado = true;
      this.nomeUsuario = usuario.nome;
    }
  }

  logout() {
    localStorage.removeItem('usuarioLogado');
    this.usuarioLogado = false;
    this.nomeUsuario = '';
    this.email = '';
    this.password = '';
    this.mensagemErro = '';
    alert('Logout realizado com sucesso!');
  }
}
