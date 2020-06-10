import { Component, ViewChild } from "@angular/core";
import {
  NavController,
  NavParams,
  Slide,
  ToastController,
  ModalController
} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { CartModalPage } from "../cart-modal/cart-modal";

@Component({
  selector: "page-product-details",
  templateUrl: "product-details.html"
})
export class ProductDetailsPage {
  @ViewChild("productSlides") productSlides: Slide;

  product;
  any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController
  ) {
    this.product = this.navParams.get("product");
    console.log(this.product);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductDetailsPage");
  }

  async addToCart(product) {
    this.storage.get("cart").then(data => {
      if (data == null || data.length == 0) {
        data = [];

        data.push({
          product: product,
          qty: 1,
          amount: parseFloat(product.price)
        });
      } else {

        let added = false;

        for (let i = 0; i < data.length; i++) {
          if (product.product_code == data[i].product.product_code) {
            data[i].qty += 1;
            data[i].amount += product.price;
            added = true;
          }
        }

        if (!added) {
          data.push({
            product: product,
            qty: 1,
            amount: parseFloat(product.price)
          });
        }
      }

      this.storage.set("cart", data).then(() => {
        console.log("Cart Updated");
        console.log(data);

        this.toastCtrl
          .create({
            message: "Cart updated",
            duration: 3000
          })
          .present();
      });
    });
  }

  openCart() {
    this.modalCtrl.create(CartModalPage).present();
  }
}
