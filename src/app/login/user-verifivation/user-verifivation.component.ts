import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'user-verifivation',
    templateUrl: 'user-verifivation.component.html',
    styleUrls: ['user-verifivation.component.scss']
})
export class UserVerifivationComponent {

    public userToken;

    constructor(private route: ActivatedRoute) {
        this.userToken = this.route.snapshot.params['usertoken'];
    }
}
