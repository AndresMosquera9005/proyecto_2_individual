import { Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { HeaderComponent } from './components/header/header.component';

export const routes: Routes = [
    {
        path: '', component: HeaderComponent
    },
    {
        path: 'header', component: HeaderComponent
    },
    // {
    //     path: 'login', component: LoginComponent
    // },
    // {
    //     path: 'registro', component: RegistroComponent
    // }
];
