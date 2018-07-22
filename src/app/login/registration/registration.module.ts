import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RegistraionFormRouting } from "./registration.routing";
import { RegistrationComponent } from "./registration.component";
import { DemoMaterialModule } from "../../material.module";

@NgModule({
  imports: [
    RegistraionFormRouting,
    DemoMaterialModule,
    CommonModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [
    RegistrationComponent
  ],
})

export class RegistrationFormModule {
  constructor () {
    console.error("Registraion form module: lazy loaded");
  }
}
