import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { CommonModule } from '@angular/common';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
    declarations: [
        AppComponent,
        BotaoComponent,
        LoginComponent,
        ToDoListComponent,
        SignupComponent,
        ForgotPasswordComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(routes),
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }