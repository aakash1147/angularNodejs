import { NgModule } from "@angular/core";
import { LoginFormComponent } from "./login-form.component";
import { LoginFormRouting } from "./login-form.routing";
import { DemoMaterialModule } from "../../material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  imports: [
    LoginFormRouting, DemoMaterialModule, CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
    LoginFormComponent,
  ],
})

export class LoginFormModule {
  constructor () {
    console.error("Login form module: lazy loaded");
  }
}
