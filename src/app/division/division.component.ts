import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-division',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent {
   
  uno: number = 0;
  dos: number = 0;
  resultado: number = 0;

  constructor(private router: Router) {}

  Resultado() {
    if (this.uno === 0 || this.dos === 0) {
      alert("Por favor, ingrese valores");
    } else {
      this.resultado = this.uno / this.dos;
      alert("Hola, el resultado es " + this.resultado);
    }
  }

  Regreso() {
    this.router.navigate(["main"]);
  }

}