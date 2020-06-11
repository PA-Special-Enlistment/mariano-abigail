import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-order-list',
  templateUrl: 'order-list.html',
})
export class OrderListPage {

  order_status: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.order_status = "all";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderListPage');
  }

}
