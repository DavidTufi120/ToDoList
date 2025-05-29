import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../environments/environment';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CustomSnackbarComponent } from '../custom-snackbar/custom-snackbar.component';

@Component({
    selector: 'app-forgot-password',
    templateUrl: './forgot-password.component.html',
    styleUrls: ['./forgot-password.component.css'],
    imports: [CommonModule, FormsModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSnackBarModule]
})
export class ForgotPasswordComponent {
    email = '';
    mensagemErro = '';

    constructor(
        private http: HttpClient,
        private router: Router,
        private snackBar: MatSnackBar) { }

    forgotPassword() {
        this.http.post<any>(`${environment.apiUrl}/api/forgot-password`, {
            email: this.email
        }).subscribe({
            next: (response) => {
                console.log(response);
                this.snackBar.open('E-mail de recuperação enviado com sucesso!', 'Fechar', {
                    duration: 3000,
                    horizontalPosition: 'center',
                    verticalPosition: 'top',
                    panelClass: ['snackbar-success']
                });
                this.router.navigate(['/login']);
            },
            error: () => {
                this.snackBar.openFromComponent(CustomSnackbarComponent, {
                    data: 'Erro ao enviar e-mail de recuperação!',
                    duration: 3000,
                    horizontalPosition: 'right',
                    verticalPosition: 'top',
                    panelClass: ['snackbar-error']
                });
            }
        });
    }
}
