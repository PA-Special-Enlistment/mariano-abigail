import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { ProductDetailsPage } from "../product-details/product-details";
import { ProductManager } from "../../models/ProductManager";
import { Product } from "../../models/Product";

@Component({
  selector: "page-products-by-category",
  templateUrl: "products-by-category.html"
})
export class ProductsByCategoryPage {
  selectedBrand;
  filteredProducts: Product[] = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public productManager: ProductManager
  ) {
    this.selectedBrand = this.navParams.get("brand");
    this.filterProducts();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad ProductsByCategoryPage");
  }

  openProductsPage(product) {
    this.navCtrl.push(ProductDetailsPage, { product: product });
  }

  filterProducts() {
    //TODO: filter products by category. for in loop not working, product is tagged as string even though it is an object

    let products: Product[] = this.productManager.getProducts();

    for (let i = 0; i < products.length; i++) {
      if (products[i].brand.name == this.selectedBrand)
        this.filteredProducts.push(products[i]);
    }
  }
}
