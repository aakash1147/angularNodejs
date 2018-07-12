import { Injectable } from "@angular/core";

@Injectable()

export class projectApi {
    public baseUrl = "http://localhost:5000/";

    login= this.baseUrl + "login";
    
}