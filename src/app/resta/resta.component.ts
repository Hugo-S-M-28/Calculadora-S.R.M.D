import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-resta',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './resta.component.html',
  styleUrls: ['./resta.component.scss']
})

export class RestaComponent {
   
  uno: number = 0;
  dos: number = 0;
  resultado: number = 0;
  
  constructor(private router: Router) {}
  
  Resultado() {
    if (this.uno === 0 || this.dos === 0) {
      alert("Por favor, ingrese valores");
    } else {
      this.resultado = this.uno - this.dos;
      alert("Hola, el resultado es " + this.resultado);
    }
  }
  
  Regreso() {
    this.router.navigate(["main"]);
  }
  
}
