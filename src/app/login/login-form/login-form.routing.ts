import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginFormComponent } from './login-form.component';


export const routes: Routes = [
    { path: '', component: LoginFormComponent },
];


export const LoginFormRouting: ModuleWithProviders = RouterModule.forChild(routes);
