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
                return data;
            },
            error => {
                return error;
            }
        );
    }

    createUser(data) {
        this.LoginService.RegistrationFormService(data).subscribe(
            data => {
                return data;
            },
            error => {
                return error;
            }
        );
    }

    retrive_data_user_varification_token(data) {
        this.LoginService.varification_Form_Service_On_token_base(data).subscribe(
            data => {
              console.log(data);

            },
            error => {
                return error;
            }
        )
    }


}
