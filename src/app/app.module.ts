import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Necessário para ngModel
import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './token-interceptor/token.interceptor';

@NgModule({
    declarations: [
        AppComponent,
        BotaoComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
    ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
