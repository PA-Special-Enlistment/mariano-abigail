import { Component, ViewChild } from "@angular/core";
import { NavController, Slides, ToastController } from "ionic-angular";
import { ProductDetailsPage } from "../product-details/product-details";
import { Product } from "../../models/Product";
import { ProductManager } from "../../models/ProductManager";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("productSlides") productSlides: Slides;

  products: Product[] = [];
  banners = [];

  constructor(public navCtrl: NavController, public productManager: ProductManager) {
    this.products = productManager.getProducts();
    this.banners = [
      // "https://mir-s3-cdn-cf.behance.net/project_modules/disp/56613b18954529.562d231b8203f.jpg",
      "https://cdn.dribbble.com/users/2160766/screenshots/6776177/retouching_-_x_plr.jpg",
      // "https://s3images.coroflot.com/user_files/individual_files/494449_8aGwx7GCIidNyrvAyQd9sfcwd.jpg"
    ]
    console.log(this.products)
  }

  ionViewDidLoad() {
    setInterval(() => {
      if (this.productSlides.getActiveIndex() == 3)
        this.productSlides.slideTo(0);

      this.productSlides.slideNext();
    }, 3000);
  }

  loadMoreProducts() {}

  openProductsPage(product) {
    this.navCtrl.push(ProductDetailsPage, { product: product });
  }
}
