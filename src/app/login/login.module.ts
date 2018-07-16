import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DemoMaterialModule } from "../material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { routing } from "./login.routing";

import { LoginFormComponent } from "./login-form/login-form.component";
import { RegistrationComponent } from "./registration/registration.component";
import { LoginModuleService } from "./login-module.service";
import { UserVerifivationComponent } from "./user-verifivation/user-verifivation.component";


@NgModule({
    imports: [
        DemoMaterialModule,
        CommonModule, FormsModule, ReactiveFormsModule,
        routing, 
    ],
    declarations: [LoginFormComponent, RegistrationComponent,
        UserVerifivationComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: [LoginModuleService]
})


export class LoginModule {
}