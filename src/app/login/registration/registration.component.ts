import { Component, OnInit } from '@angular/core';
import { LoginModuleService } from '../login-module.service';

@Component({
    selector: 'registration',
    templateUrl: 'registration.component.html',
    styleUrls: ['registration.component.scss']
})
export class RegistrationComponent implements OnInit {

    public userCreate = {
        "firstname": null,
        "lastname": null,
        "email": null,
        "phoneno":null,
    }

    constructor (private LoginModuleService: LoginModuleService) {

    }
    ngOnInit () {

    }

    method_for_create_user() {
        console.log(this.userCreate)
        this.LoginModuleService.createUser(this.userCreate);
    }
}
