import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Network } from "../app/utilities/network";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ShopEaseService {
    network: any;

    constructor(private http: HttpClient, ) {
        this.network = new Network(this.http);
    }

    public login(username, password): Observable<any> {
        console.log('POST: Login');
        const param = { username, password };
        console.log('Params: ', param)
        return this.network.get('Login', param);
    }

}