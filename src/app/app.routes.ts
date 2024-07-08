
import { Routes } from '@angular/router';
import { SumaComponent } from './suma/suma.component';
import { RestaComponent } from './resta/resta.component';
import { MultiplicacionComponent } from './multiplicacion/multiplicacion.component';
import { DivisionComponent } from './division/division.component';
import { MainComponent } from './main/main.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [

    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent},
    {path: 'suma', component: SumaComponent},
    {path: 'resta', component: RestaComponent},
    {path: 'multiplicacion', component: MultiplicacionComponent},
    {path: 'division', component: DivisionComponent},

];
