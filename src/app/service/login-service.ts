import { Injectable } from '@angular/core';
import { HttpClient } from './custom-http-client.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { projectApi } from './project-api.service';
import 'rxjs/Rx';
@Injectable()

export class LoginService {
    constructor(private http: Http, private projectApi: projectApi, private httpWithToken: HttpClient) {
    }

    LoginFormService(dto_data) {
        return this.http.post(this.projectApi.login, dto_data).map(res => res.json());
    }  

    RegistrationFormService(dto_data) {
        return this.http.post(this.projectApi.createUser, dto_data).map(res => res.json());
    }
}