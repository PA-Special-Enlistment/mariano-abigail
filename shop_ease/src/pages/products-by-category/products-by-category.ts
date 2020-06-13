import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProductDetailsPage } from "../product-details/product-details";
import { ProductManager } from "../../models/ProductManager";
import { Product } from "../../models/Product";
import { ShopEaseService } from "../../services/shop_ease.service";

@Component({
  selector: "page-products-by-category",
  templateUrl: "products-by-category.html"
})
export class ProductsByCategoryPage {
  filteredProducts: Product[] = [];
  products: any;
  showEmptyPageMessage = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productManager: ProductManager,
    public shopEaseService: ShopEaseService
  ) {
    let id = this.navParams.get("brand_id");
    this.getProductsByBrand(id);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductsByCategoryPage");
  }

  openProductsPage(id) {
    this.navCtrl.push(ProductDetailsPage, { product_id: id });
  }

  getProductsByBrand(id) {
    this.shopEaseService.getProductsByBrand(id).subscribe(data => {
      if (!data || data == null || data == []) {
        this.showEmptyPageMessage = true;
      } else {
          this.products = data;
      }
    });
  }
}
