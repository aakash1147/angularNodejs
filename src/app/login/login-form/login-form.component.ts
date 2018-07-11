import { Component } from '@angular/core';
import { LoginModuleService } from '../login-module.service';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.scss']
})
export class LoginFormComponent {

    public loginDto = {
        "email": null,
        "password": null,
    };

    constructor(private loginModuleService: LoginModuleService) {

    }
}
