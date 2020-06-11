import { Component, ViewChild } from "@angular/core";
import { NavController, Slides, ToastController } from "ionic-angular";
import { ProductDetailsPage } from "../product-details/product-details";
import { Product } from "../../models/Product";
import { ProductManager } from "../../models/ProductManager";
import { HttpClient } from '@angular/common/http'

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("productSlides") productSlides: Slides;

  products: any[];
  banners = [];

  constructor(public navCtrl: NavController, public productManager: ProductManager, public http: HttpClient) {
    this.products = productManager.getProducts();
    this.banners = [
      // "https://mir-s3-cdn-cf.behance.net/project_modules/disp/56613b18954529.562d231b8203f.jpg",
      "https://cdn.dribbble.com/users/2160766/screenshots/6776177/retouching_-_x_plr.jpg",
      // "https://s3images.coroflot.com/user_files/individual_files/494449_8aGwx7GCIidNyrvAyQd9sfcwd.jpg"
    ]
    // console.log(this.products)
    this.getProducts();
  }

  ionViewDidLoad() {
    setInterval(() => {
      if (this.productSlides.getActiveIndex() == 3)
        this.productSlides.slideTo(0);

      this.productSlides.slideNext();
    }, 3000);
  }

  getProducts() {
    this.http.get('http://127.0.0.1:8000/api/Products').subscribe((data: any) => {
      console.log("Products response = ", data);

      if (data) {
        this.products = data;
      } else {
        alert("An error ocurred on fetching Products")
      }
    });
  }

  openProductsPage(id) {
    this.navCtrl.push(ProductDetailsPage, { product_id: id });
  }
}
