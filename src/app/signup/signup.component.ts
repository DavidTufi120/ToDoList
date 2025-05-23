import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-sigunp',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    imports: [CommonModule, FormsModule],
})

export class SignupComponent implements OnInit {
    email: string = '';
    password: string = '';
    passwordStrength = '';
    passwordError = '';
    existingUser: boolean = false;

    // Flags para cada critério
    hasMinLength = false;
    hasUpper = false;
    hasLower = false;
    hasSpecial = false;
    noRepeatedNumbers = true;

    passwordStrengthScore = 0;

    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit(): void { }

    validatePassword(password: string) {
        this.hasMinLength = password.length >= 8;
        this.hasUpper = /[A-Z]/.test(password);
        this.hasLower = /[a-z]/.test(password);
        this.hasSpecial = /[^A-Za-z0-9]/.test(password);
        this.noRepeatedNumbers = !(/(\d)\1{1,}/.test(password));

        let score = 0;
        if (this.hasMinLength) score++;
        if (this.hasUpper && this.hasLower) score++;
        if (this.hasSpecial && this.noRepeatedNumbers) score++;

        this.passwordStrengthScore = score;

        let errors = [];
        if (!this.hasMinLength) errors.push('Mínimo 8 caracteres');
        if (!this.hasUpper) errors.push('Pelo menos 1 letra maiúscula');
        if (!this.hasLower) errors.push('Pelo menos 1 letra minúscula');
        if (!this.hasSpecial) errors.push('Pelo menos 1 caractere especial');
        if (!this.noRepeatedNumbers) errors.push('Não pode repetir números');

        this.passwordError = errors.join(', ');

        if (score <= 2) this.passwordStrength = 'fraca';
        else if (score === 3 || score === 4) this.passwordStrength = 'media';
        else this.passwordStrength = 'forte';
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


