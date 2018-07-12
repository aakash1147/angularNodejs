import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CdkTableModule} from '@angular/cdk/table';
import { HttpClientModule } from '@angular/common/http'
import { platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CookieModule } from 'ngx-cookie';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { DemoMaterialModule } from './material.module';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { LoginModule } from './login/login.module';
import { projectApi } from './service/project-api.service';
import { LoginService } from './service/login-service';
import { HttpClient } from './service/custom-http-client.service';




@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpModule,
    DemoMaterialModule, 
    BrowserAnimationsModule,
    FormsModule, ReactiveFormsModule,
    
    HttpClientModule,
    routing,
    CookieModule.forRoot(),
    LoginModule
  ],
  exports: [
    DemoMaterialModule
  ],
  providers: [projectApi, LoginService,HttpClient],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
