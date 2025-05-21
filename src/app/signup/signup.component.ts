import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sigunp',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    imports: [CommonModule, FormsModule]
})

export class SignupComponent implements OnInit {
    email: string = '';
    password: string = '';

    constructor(private router: Router) { }

    ngOnInit(): void { }

    Signup() {
        this.router.navigate(['/list']);
        console.log(this.email, this.password);
    }
}



