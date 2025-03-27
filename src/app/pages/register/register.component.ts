import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onRegister() {
    if (this.username.trim() && this.password.trim()) {
      localStorage.setItem('registeredUsername', this.username);
      localStorage.setItem('registeredPassword', this.password);
      this.successMessage = 'Usuário registrado com sucesso! Você será redirecionado para a página de login.';
      this.errorMessage = '';
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    } else {
      this.errorMessage = 'Por favor, preencha todos os campos.';
      this.successMessage = '';
    }
  }
}