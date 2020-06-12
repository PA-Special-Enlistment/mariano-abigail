import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
// import { Network } from "../app/utilities/network";
import { Observable } from "rxjs/Observable";
import { environment } from '../environment/environment'
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ShopEaseService {

    network: any;
    credentials = new BehaviorSubject(null);

    constructor(private http: HttpClient, ) {
        // this.network = new Network(this.http);
    }

    public login(username, password): Observable<any> {
        console.log('POST: Login');
        return this.http.get(`${environment.dev_url}/Login/${username}/${password}`);
    }

}