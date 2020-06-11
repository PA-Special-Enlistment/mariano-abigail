import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login() {
    this.alertCtrl.create({
      title: "Login Successful",
      message: "You have been logged in successfully.",
      buttons: [{
        text: "OK",
        handler: () => {
          if (this.navParams.get("next")) {
            this.navCtrl.push(this.navParams.get("next"));
          } else {
            this.navCtrl.pop();
          }
        }
      }]
    }).present();
  }
}
