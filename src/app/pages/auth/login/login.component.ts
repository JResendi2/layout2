import { Component } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    InputTextModule,
    PasswordModule,
    ButtonModule,
    CardModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  username: string = ''; // Definir la propiedad username
  password: string = ''; // Definir la propiedad password
  passwordVisible: boolean = false;

  togglePassword() {
    this.passwordVisible = !this.passwordVisible;
  }
}
