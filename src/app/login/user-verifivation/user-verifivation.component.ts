import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginModuleService } from '../login-module.service';

@Component({
    selector: 'user-verifivation',
    templateUrl: 'user-verifivation.component.html',
    styleUrls: ['user-verifivation.component.scss']
})
export class UserVerifivationComponent {

    public userToken;

    constructor(private route: ActivatedRoute, private LoginModuleService: LoginModuleService) {
        this.userToken = this.route.snapshot.params['usertoken'];
        console.log(this.userToken);
        this.get_user_data_from_varification_token();   
    }

    get_user_data_from_varification_token() {
        var varification = {
            token: this.userToken, 
        }
        var data = this.LoginModuleService.retrive_data_user_varification_token(varification);        
        console.log(data);
    }

}
