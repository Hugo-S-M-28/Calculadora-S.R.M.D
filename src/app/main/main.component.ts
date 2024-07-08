import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  usuario: String ='Hugo';

  constructor(private router: Router){

  }
  iraSuma(){
    this.router.navigate(['suma']);
  }

  
  iraResta(){
    this.router.navigate(['resta']);
  }
  
  iraMultiplicacion(){
    this.router.navigate(['multiplicacion']);
  }
  
  iraDivision(){
    this.router.navigate(['division']);
    
  }
  cerrarsesion() {
    this.router.navigate(['login']);
  }

}
