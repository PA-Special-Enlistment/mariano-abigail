import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slide } from 'ionic-angular';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  @ViewChild("productSlides") productSlides: Slide;

  product: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.product = this.navParams.get("product");
    console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

}
