import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-new-password',
    templateUrl: './new-password.component.html',
    styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent implements OnInit {
    token = '';
    newPassword = '';
    confirmPassword = '';
    errorMessage = '';
    successMessage = '';

    constructor(
        private http: HttpClient,
        private router: Router,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.token = params['token'] || '';
        });
    }

    changePassword() {
        if (this.newPassword !== this.confirmPassword) {
            this.errorMessage = 'As senhas não coincidem!';
            return;
        }
        this.http.post(`${environment.apiUrl}/api/change-password`, {
            token: this.token,
            newPassword: this.newPassword
        }).subscribe({
            next: () => {
                this.successMessage = 'Senha alterada com sucesso';
                this.router.navigate(['/login']);
            },
            error: () => {
                this.errorMessage = 'Erro ao alterar senha';
            }
        });
    }
}