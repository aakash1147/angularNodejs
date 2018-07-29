import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginModuleService } from '../login-module.service';
import { LoginService } from '../../service/login-service';

@Component({
    selector: 'user-verifivation',
    templateUrl: 'user-verifivation.component.html',
    styleUrls: ['user-verifivation.component.scss']
})
export class UserVerifivationComponent {

    public userToken;

    // public varificationEmailData = {
    //   email: null,
    //   password: null,
    //   confirmPassword: null
    // }


    constructor(private route: ActivatedRoute, private loginService: LoginService) {
        this.userToken = this.route.snapshot.params['usertoken'];
        console.log(this.userToken);
        this.get_user_data_from_varification_token();
    }

    get_user_data_from_varification_token() {
        var varification = {
            token: this.userToken,
        };
        this.loginService.varification_Form_Service_On_token_base(varification).subscribe(
          data => {
            console.log(data);
          },
          error => {
            console.log(error);
          }
        )


    }

}
