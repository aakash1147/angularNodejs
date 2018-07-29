import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoginFormComponent } from './login-form/login-form.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserVerifivationComponent } from './user-verifivation/user-verifivation.component';
import { LoginComponent } from './login.component';


export const routes: Routes = [
    // { path: '', redirectTo: 'login', pathMatch: 'full' },
    // { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'login-form', pathMatch: 'full' },
    { path: 'login', redirectTo: 'login-form',  pathMatch: 'full' },
    { path: 'login-form', loadChildren: '../login/login-form/login-form.module#LoginFormModule' },
    { path: 'registration', loadChildren: '../login/registration/registration.module#RegistrationFormModule' },
    { path: 'userverifivation/:usertoken', component: UserVerifivationComponent }
];


export const routing: ModuleWithProviders = RouterModule.forChild(routes);
