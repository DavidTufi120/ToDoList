import { Component, OnInit } from '@angular/core';
import { Task } from '../models/task.model';
import { TaskService } from '../services/task.services';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css'],
  imports: [CommonModule, FormsModule]
})

export class ToDoListComponent implements OnInit {

  tarefas: Task[] = [];
  novaTarefa: string = ''; // Para o título da tarefa
  novaDescricao: string = ''; // Para a descrição da tarefa
  editandoIndex: number | null = null;
  erro: boolean = false;
  mostrarModalLogout: boolean = false;

  constructor(
    private taskService: TaskService,
    private router: Router
  ) { }

  ngOnInit() {
    const verifyToken = localStorage.getItem('token');
    !verifyToken ? this.router.navigate(['/login']) : this.loadTasks();
  }

  loadTasks() {
    this.taskService.getAllTasks().subscribe({
      next: (data) => {
        this.tarefas = data;
      }
    });
  }

  adicionar() {
    const novaTask: Task = {
      title: this.novaTarefa.trim(),
      description: this.novaDescricao.trim()
    };

    this.taskService.createTask(novaTask).subscribe({
      next: (data) => {
        this.tarefas.push(data);
        this.novaTarefa = '';    // Limpa o campo de título
        this.novaDescricao = ''; // Limpa o campo de descrição
      },
      error: (err) => {
        console.error('Erro ao adicionar a tarefa', err);
      }
    });
  }

  verificarTarefa() {
    if ((!this.novaTarefa || this.novaTarefa.trim() === '') || (!this.novaDescricao || this.novaDescricao.trim() === '')) {
      this.erro = true;
      return;
    }

    this.erro = false;

    if (this.editandoIndex === null) {
      this.adicionar();
    } else {
      this.salvarEdicao();
    }
  }

  editar(index: number) {
    this.editandoIndex = index;
    this.novaTarefa = this.tarefas[index].title;
    this.novaDescricao = this.tarefas[index].description;
  }

  salvarEdicao() {
    if (this.editandoIndex !== null) {
      // Garantir que o id seja um número válido
      const tarefaEditada: Task = {
        id: this.tarefas[this.editandoIndex].id!,  // Adicionando "!" para indicar que o id não será undefined
        title: this.novaTarefa.trim(),
        description: this.novaDescricao.trim()
      };

      // Verificação se o id é válido antes de chamar a função de atualização
      if (tarefaEditada.id) {
        this.taskService.updateTask(tarefaEditada).subscribe({
          next: (data) => {
            this.tarefas[this.editandoIndex!] = data;
            this.editandoIndex = null;
            this.novaTarefa = '';
            this.novaDescricao = '';
          },
          error: (err) => {
            console.error('Erro ao editar a tarefa', err);
          }
        });
      } else {
        console.error('ID da tarefa não encontrado');
      }
    }
  }

  deletar(index: number) {
    const tarefa = this.tarefas[index];

    if (tarefa.id !== undefined) {
      this.taskService.deleteTask(tarefa.id).subscribe({
        next: () => {
          this.tarefas.splice(index, 1);
        },
        error: (err) => {
          console.error('Erro ao deletar a tarefa', err);
        }
      });
    } else {
      console.error('Erro: A tarefa não tem ID');
    }
  }

  abrirConfirmacaoLogout() {
    this.mostrarModalLogout = true;
  }

  cancelarLogout() {
    this.mostrarModalLogout = false;
  }

  confirmarLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
    this.mostrarModalLogout = false;
    this.novaDescricao = '';
    this.novaTarefa = '';
  }

}