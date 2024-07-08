import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: 'login.component.html',
  styleUrl: 'login.component.scss'
})
export class LoginComponent {
  usuario: string = '';
  contrasena: string = '';

  constructor(private router: Router) {

  }
  login() {
    if (this.usuario === 'estudiante' && this.contrasena === 'estudiante') {
      this.router.navigate(["main"]);
    } else {
      alert('Usuario y/o contraseña incorrectos');
    }
  }
}
