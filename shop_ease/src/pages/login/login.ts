import { Component } from "@angular/core";
import { NavController, NavParams, AlertController, ToastController } from "ionic-angular";
import { ShopEaseService } from "../../services/shop_ease.service";
import { Storage } from "@ionic/storage";
import { SignupPage } from "../signup/signup";

@Component({
  selector: "page-login",
  templateUrl: "login.html"
})
export class LoginPage {
  username = "";
  password = "";

  user = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public shopEaseService: ShopEaseService,
    private toastCtrl: ToastController,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad LoginPage");
  }

  login() {
    this.shopEaseService.login(this.username, this.password).subscribe(data => {

      if (data && data.result) {

        this.shopEaseService.credentials.next(data.customer);

        this.storage.set("userLoginInfo", data.customer).then(data => {

          this.alertCtrl
          .create({
            title: "Login Successful",
            message: data.message,
            buttons: [
              {
                text: "OK",
                handler: () => {
                  if (this.navParams.get("next")) {
                    this.navCtrl.push(this.navParams.get("next"));
                  } else {
                    this.navCtrl.pop();
                  }
                }
              }
            ]
          })
          .present();

        });

      } else {
        
        this.toastCtrl.create({
          message: data.message,
          duration: 5000
        }).present();
        return;

      }
    });
  }

  signup(){
    this.navCtrl.push(SignupPage);
  }
}
