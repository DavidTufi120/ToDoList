import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-botao',
  imports: [CommonModule],
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.css']
})
export class BotaoComponent {
  mensagemVisivel = false;

  mostrarMensagem() {
    this.mensagemVisivel = true;
  }
}
