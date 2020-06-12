import { Component, ViewChild, OnInit, AfterViewInit } from "@angular/core";
import {
  NavController,
  NavParams,
  Slide,
  ToastController,
  ModalController
} from "ionic-angular";
import { Storage } from "@ionic/storage";
import { CartModalPage } from "../cart-modal/cart-modal";
import { HttpClient } from "@angular/common/http";
import { ShopEaseService } from "../../services/shop_ease.service";

@Component({
  selector: "page-product-details",
  templateUrl: "product-details.html"
})
export class ProductDetailsPage {
  @ViewChild("productSlides") productSlides: Slide;

  product: any = {
    images: [],
    specs: []
  };
  shoeSizes = [];
  shoeSize: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController,
    public shopEaseService: ShopEaseService
  ) {
    let product_id = this.navParams.get("product_id");
    this.getProductDetails(product_id);
    this.shoeSizes = ['4 UK', '5 UK', '6 UK', '7 UK', '8 UK', '9 UK', '10 UK'];
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductDetailsPage");
  }

  getProductDetails(id) {

    this.shopEaseService.getProductDetails(id).subscribe((data: any) => {
      if (data) {
        this.product = data.data.product;
        this.product.images = data.data.images;
        this.product.specs = data.data.specs;
        console.log(this.product);
      } else {
        alert("An error occurred on fetching Product details");
      }
    });
  }

  async addToCart(product) {

    if (!this.shoeSize) {
      alert('Please select your size first.')
      return;
    }

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
