import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopEaseService } from '../../services/shop_ease.service';

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {

  order: any = {
    customer_name: String,
    shipping_details: String,
    total: Number
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public shopEaseService: ShopEaseService) {
    // let order_id = this.navParams.get("order_id");
    // this.getOrderDetails(order_id);
    this.order = this.navParams.get("order");
    this.order.customer_name = `${this.order.customer.first_name} ${this.order.customer.last_name}`;
    this.order.shipping_details = `${this.order.customer.address}, ${this.order.customer.city}, ${this.order.customer.province}, ${this.order.customer.country}`;

    this.order.sales_products.forEach(element => {
      this.order.total += (this.order.sales_products.price * this.order.sales_products.qty);
    });
    console.log("henlo", this.order);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrderDetailsPage');
  }

  // getOrderDetails(id) {
  //   this.shopEaseService.getOrderDetails(order_id).subscribe(data => {
  //     if (data) {
  //       this.order = data;
  //     }
  //   });
  // }

}
