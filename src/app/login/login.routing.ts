import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationComponent } from './registration/registration.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginFormComponent },
    { path: 'registration', component: RegistrationComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);