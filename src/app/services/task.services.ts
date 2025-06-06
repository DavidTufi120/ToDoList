import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Task } from '../models/task.model';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private apiUrl = `${environment.apiUrl}/api/tasks`;

    constructor(private http: HttpClient) { }

    getAllTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(this.apiUrl).pipe(
            catchError(this.handleError)
        );
    }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>(`${this.apiUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(this.apiUrl, task).pipe(
            catchError(this.handleError)
        );
    }

    updateTask(task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task).pipe(
            catchError(this.handleError)
        );
    }

    deleteTask(id: number): Observable<void> {
        return this.http.delete<void>(`${this.apiUrl}/${id}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        console.error('Erro na requisição:', error);

        let errorMessage = 'Erro desconhecido';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `Erro no cliente: ${error.error.message}`;
        } else if (error.status) {
            errorMessage = `Erro ${error.status}: ${error.error?.message || error.message}`;

            switch (error.status) {
                case 404:
                    errorMessage = 'Recurso não encontrado';
                    break;
                case 401:
                    errorMessage = 'Acesso não autorizado';
                    break;
            }
        }

        return throwError(() => new Error(errorMessage));
    }
}