import { Component, OnInit } from '@angular/core';
import { LoginModuleService } from '../login-module.service';

@Component({
    selector: 'login-form',
    templateUrl: 'login-form.component.html',
    styleUrls: ['login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

    public loginDto = {
        "email": null,
        "password": null,
    };

    constructor(private loginModuleService: LoginModuleService) {

    }

    ngOnInit() {

    }

    method_for_login() {
        console.log(this.loginDto);
        this.loginModuleService.loginUser(this.loginDto);
    }

}
