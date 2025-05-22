import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-sigunp',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    imports: [CommonModule, FormsModule]
})

export class SignupComponent implements OnInit {
    email: string = '';
    password: string = '';
    passwordStrength = '';
    passwordError = '';
    existingUser: boolean = false;

    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit(): void { }

    validatePassword(password: string) {
        const minLength = /.{8,}/;
        const upperCharacters = /[A-Z]/;
        const lowerCharacters = /[a-z]/;
        const specialCharacters = /[^A-Za-z0-9]/;
        const repeatedNumbers = /(\d)\1{1,}/;

        let errors = [];
        if (!minLength.test(password)) errors.push('Mínimo 8 caracteres');
        if (!upperCharacters.test(password)) errors.push('Pelo menos 1 letra maiúscula');
        if (!lowerCharacters.test(password)) errors.push('Pelo menos 1 letra minúscula');
        if (!specialCharacters.test(password)) errors.push('Pelo menos 1 caractere especial');
        if (repeatedNumbers.test(password)) errors.push('Não pode repetir números');

        this.passwordError = errors.join(', ');

        let score = 0;
        if (minLength.test(password)) score++;
        if (upperCharacters.test(password)) score++;
        if (lowerCharacters.test(password)) score++;
        if (specialCharacters.test(password)) score++;
        if (!repeatedNumbers.test(password)) score++;

        if (score <= 2) this.passwordStrength = 'Fraca';
        else if (score === 3 || score === 4) this.passwordStrength = 'Média';
        else this.passwordStrength = 'Forte';
    }

    Signup() {
        this.http.post<any>(`${environment.apiUrl}/api/users`, {
            email: this.email,
            password: this.password
        }).subscribe({
            next: (res) => {
                this.router.navigate(['/list']);
            },
            error: (err) => {
                err.status === 409 ? this.existingUser = true : alert('Erro ao cadastrar usuário!')
            }
        });
    }
}


