import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent },
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);