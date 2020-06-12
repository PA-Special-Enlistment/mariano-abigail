import { environment } from '../../environment/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as $ from 'jquery'

export class Network {

    // headers = {
    //     headers: {
    //         "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8;",
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "POST, GET, OPTIONS, PUT",
    //         "Accept": "application/json",
    //         "content-type": "application/json"
    //     }
    // }

    headers = new HttpHeaders();
    options;

    constructor(
        private httpClient: HttpClient
    ) {
        // this.headers.append('Access-Control-Allow-Origin' , '*');
        // this.headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
        // this.headers.append('Accept','application/json');
        // this.headers.append('content-type','application/json');
    }

    post = (endpoint, param) => {
        const url = `${environment.dev_url}${endpoint}`;

        alert(this.headers)
        return this.httpClient.post(url, $.param(param), { headers: this.headers });
    }

    postFormData = (endpoint, param) => {
        return this.httpClient.post(endpoint, $.param(param), { headers: this.headers });
    }

    get = (endpoint, param = '') => {

        const params = Object.keys(param).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(param[key])).join('&');
        const url = `${environment.dev_url}${endpoint}${'?'}`;

        return this.httpClient.get(url + params, { headers: this.headers });
    }

}