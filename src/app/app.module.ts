import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Necessário para ngModel
import { AppComponent } from './app.component';
import { BotaoComponent } from './botao/botao.component';
import { LoginComponent } from './login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        BotaoComponent,
        LoginComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,    // Necessário para usar ngModel
        // Não precisa mais do CommonModule aqui
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
