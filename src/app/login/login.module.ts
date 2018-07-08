import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { DemoMaterialModule } from "../material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginFormComponent } from "./login-form/login-form.component";
import { routing } from "./login.routing";

@NgModule({
    imports: [
        DemoMaterialModule,
        CommonModule, FormsModule, ReactiveFormsModule,
        routing
    ],
    declarations: [
        LoginFormComponent
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
    providers: []
})


export class LoginModule {
}