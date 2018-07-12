import { Injectable } from "@angular/core";
import { projectApi } from "../service/project-api.service";
import { LoginService } from "../service/login-service";

@Injectable ()

export class LoginModuleService {

    

    constructor (private LoginService: LoginService) {

    }

    loginUser(data) {
        this.LoginService.LoginFormService(data).subscribe(
            data => {
                console.log(data);
            },
            error => {
                console.log(error);
            }
        );
    }

    createUser(data) {
        
    }


}