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
  page: number;
  showEmptyPageMessage = false;
  title = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productManager: ProductManager,
    public shopEaseService: ShopEaseService
  ) {
    this.products = [];
    this.page = 1;
    this.title = this.navParams.get("title");
    let id = this.navParams.get("brand_id");

    if (id) {
      this.getProductsByBrand(id);
    } else {
      let searchString = this.navParams.get("searchString");
      this.searchProduct(searchString);
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductsByCategoryPage");
  }

  openProductsPage(id) {
    this.navCtrl.push(ProductDetailsPage, { product_id: id });
  }

  getProductsByBrand(id) {
    this.shopEaseService.getProductsByBrand(id).subscribe(data => {
      if (data.length == 0) {
        this.showEmptyPageMessage = true;
      } else {
        this.products = data;
        this.showEmptyPageMessage = false;
      }
    });
  }

  searchProduct(string) {
    this.shopEaseService.getProducts(this.page, string).subscribe(response => {
      if (response.data.length == 0) {
        this.showEmptyPageMessage = true;
      } else {
        this.products = response.data;
        this.showEmptyPageMessage = false;
      }
    });
  }
}
