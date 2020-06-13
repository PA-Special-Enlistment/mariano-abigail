import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ShopEaseService } from '../../services/shop_ease.service';

@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {

  order: any = {
    customer_name: '',
    shipping_details: '',
    customer: {},
    total: 0
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public shopEaseService: ShopEaseService) {
    // let order_id = this.navParams.get("order_id");
    // this.getOrderDetails(order_id);
    let order = this.navParams.get("order");

    if (order) {
      this.order = order;
      this.order.customer_name = `${this.order.customer.first_name} ${this.order.customer.last_name}`;
      this.order.shipping_details = `${this.order.customer.address}, ${this.order.customer.city}, ${this.order.customer.province}, ${this.order.customer.country}`;
  
      this.order.sales_products.forEach(element => {
        this.order.total += (this.order.sales_products.price * this.order.sales_products.qty);
      });
    } else {
      this.order.customer_name = "Abigail Mariano";
      this.order.shipping_details = 'Bagong Flores, Lupao, Nueva Ecija';
      this.order.customer.phone = '09153960030';
      this.order.created_date = "12 June 2020 10:47:15";


      this.order.sales_products = [];
      this.order.sales_products.push({
        image_url: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy/4290012d8fba42a48795ab0a00c8c50d_9366/Ultraboost_20_Shoes_Black_EG0698_01_standard.jpg',
        brand: 'Adidas',
        product_name: 'Ultraboost 20',
        price: 9500,
        qty: 2
      })
      this.order.total = 14500;

    }
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
