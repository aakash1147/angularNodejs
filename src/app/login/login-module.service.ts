import { Injectable } from '@angular/core';
import { projectApi } from '../service/project-api.service';
import { LoginService } from '../service/login-service';

@Injectable ()

export class LoginModuleService {



    constructor (private loginService: LoginService) {

    }

    loginUser(data_dto) {
        this.loginService.LoginFormService(data_dto).subscribe(
            data => {
              console.log(data);
                return data;
            },
            error => {
                return error;
            }
        );
    }

    createUser(data_dto) {
        this.loginService.RegistrationFormService(data_dto).subscribe(
            data => {
              console.log(data);
                return data;
            },
            error => {
                return error;
            }
        );
    }

    retrive_data_user_varification_token(data_dto) {
        this.loginService.varification_Form_Service_On_token_base(data_dto).subscribe(
            data => {
              console.log(data);
            },
            error => {
                return error;
            }
        )
    }


}
