import { Component, ViewChild } from "@angular/core";
import { NavController, Slides, ToastController } from "ionic-angular";
import { ProductDetailsPage } from "../product-details/product-details";
import { Product } from "../../models/Product";
import { ProductManager } from "../../models/ProductManager";
import { HttpClient } from "@angular/common/http";
import { Storage } from "@ionic/storage";
import { ShopEaseService } from "../../services/shop_ease.service";
import { ProductsByCategoryPage } from "../products-by-category/products-by-category";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("productSlides") productSlides: Slides;

  products: any[];
  banners = [];
  searchQuery: string;

  constructor(
    public navCtrl: NavController,
    public productManager: ProductManager,
    public http: HttpClient,
    public storage: Storage,
    public shopEaseService: ShopEaseService
  ) {
    this.products = productManager.getProducts();
    this.banners = [
      "https://cdn.dribbble.com/users/2160766/screenshots/6776177/retouching_-_x_plr.jpg",
      "https://s3images.coroflot.com/user_files/individual_files/494449_8aGwx7GCIidNyrvAyQd9sfcwd.jpg"
    ];

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
    this.http
      .get("http://127.0.0.1:8000/api/Products")
      .subscribe((data: any) => {
        console.log("Products response = ", data);

        if (data) {
          this.products = data;
        } else {
          alert("An error ocurred on fetching Products");
        }
      });
  }

  openProductsPage(id) {
    this.navCtrl.push(ProductDetailsPage, { product_id: id });
  }

  onSearch(event) {
    if (this.searchQuery.length > 0) {
      this.navCtrl.push(ProductsByCategoryPage, { "searchQuery": this.searchQuery });
    } else {
      alert("Please enter your query.")
    }
  }
}
