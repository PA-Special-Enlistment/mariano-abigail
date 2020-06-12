import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Network } from "../utilities/network";
import { Observable } from "rxjs/Observable";
import { environment } from "../environment/environment";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class ShopEaseService {
  network: any;
  credentials = new BehaviorSubject(null);

  constructor(private http: HttpClient) {
    this.network = new Network(this.http);
  }

  public signup(user: any): Observable<any> {
    console.log("POST: Signup");
    console.log("Params: ", user);
    const param = {
      first_name: user.first_name,
      last_name: user.last_name,
      username: user.username,
      email: user.email,
      password: user.password,
      address: user.address,
      city: user.city,
      province: user.province,
      country: user.country,
      phone: user.phone
    };
    return this.http.post(`${environment.dev_url}/Signup`, param);
  }

  public login(username, password): Observable<any> {
    console.log("POST: Login");
    return this.http.get(
      `${environment.dev_url}/Login/${username}/${password}`
    );
  }

  public checkout(order: any): Observable<any> {
    console.log("POST: Signup");
    console.log("Params: ", order);
    const param = {}
    return this.http.post(`${environment.dev_url}/Checkout`, param);
  }

  public getProductDetails(id): Observable<any> {
    console.log("GET: getProductDetails");
    console.log("Params: ", id);
    return this.http.get(`${environment.dev_url}/Product/${id}`, id);
  }
}
