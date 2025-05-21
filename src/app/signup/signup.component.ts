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

    constructor(private router: Router, private http: HttpClient) { }

    ngOnInit(): void { }



    Signup() {
        this.http.post<any>(`${environment.apiUrl}/api/users`, {
            email: this.email,
            password: this.password
        }).subscribe({
            next: (res) => {
                this.router.navigate(['/list']);
            },
            error: (err) => {
                alert('Erro ao cadastrar usuário!');
            }
        });
    }
}


