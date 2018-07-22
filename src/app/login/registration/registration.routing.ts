import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { RegistrationComponent } from './registration.component';


export const routes: Routes = [
    { path: '', component: RegistrationComponent },
];

export const RegistraionFormRouting: ModuleWithProviders = RouterModule.forChild(routes);
