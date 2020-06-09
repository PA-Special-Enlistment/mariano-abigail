import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slide } from 'ionic-angular';

@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage {

  @ViewChild("productSlides") productSlides: Slide;

  // product: any;
  imageIndex = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.imageIndex = this.navParams.get("index");
    console.log(this.imageIndex);
    // this.product = this.navParams.get("products");
    // console.log(this.product);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductDetailsPage');
  }

}
