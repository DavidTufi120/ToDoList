import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from '../models/task.model';  // Importando o modelo Task

@Injectable({
    providedIn: 'root'
})
export class TaskService {

    private apiUrl = 'http://localhost:8080/api/tasks';  // URL do backend

    constructor(private http: HttpClient) { }

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl)
            .pipe(catchError(this.handleError));
    }

    getTaskById(id: number): Observable<Task> {
        return this.http.get<Task>(`${this.apiUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task, {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        });
    }

    updateTask(id: number, task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}/${id}`, task)
            .pipe(catchError(this.handleError));
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`)
            .pipe(catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'Ocorreu um erro desconhecido!';
        if (error.error instanceof ErrorEvent) {
            // Erro no lado do cliente
            errorMessage = `Erro: ${error.error.message}`;
        } else {
            // Erro no servidor
            errorMessage = `Código de erro: ${error.status}\nMensagem: ${error.message}`;
        }
        return throwError(errorMessage);
    }
}
