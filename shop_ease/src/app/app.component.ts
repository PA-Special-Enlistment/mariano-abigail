import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, ModalController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ListPage } from "../pages/list/list";
import { ProductsByCategoryPage } from "../pages/products-by-category/products-by-category";
import { Product } from "../models/Product";
import { ProductManager } from "../models/ProductManager";
import { Brand } from "../models/Brand";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { CheckoutPage } from "../pages/checkout/checkout";
import { CartModalPage } from "../pages/cart-modal/cart-modal";
import { Storage } from "@ionic/storage";
import { OrderListPage } from "../pages/order-list/order-list";
import { OrderDetailsPage } from "../pages/order-details/order-details";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  user = {};
  brands: Brand[] = [];
  isLoggedIn = true;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public productManager: ProductManager,
    public modalCtrl: ModalController,
    public storage: Storage
  ) {
    this.initializeApp();
    this.brands = [];
    this.getBrands();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  getBrands() {
    let brand1 = new Brand();
    brand1.name = "Adidas";
    brand1.description = "All in or Nothing";
    brand1.logoUrl =
      "https://cloud.melijoe.com/p/f58b2842_1549938601_z_adidas-originals_252960_B.jpg";

    let brand2 = new Brand();
    brand2.name = "Nike";
    brand2.description = "Just Do It";
    brand2.logoUrl =
      "https://n.sinaimg.cn/front/462/w241h221/20190313/QNkr-hufnxfn0149679.jpg";

    let brand3 = new Brand();
    brand3.name = "Jordan";
    brand3.description = "Become Legendary";
    brand3.logoUrl =
      "https://i.pinimg.com/236x/55/92/48/5592485512377af8624b2bdad817825a--jordan-logo-jorden.jpg";

    this.brands.push(brand1);
    this.brands.push(brand3);
    this.brands.push(brand2);
  }

  goToHomePage() {
    this.nav.setRoot(HomePage);
  }

  openProductsByCategoryPage(brand) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(ProductsByCategoryPage, { brand: brand });
  }

  openPage(pageName: string) {
    if (pageName == "signup") {
      this.nav.push(SignupPage);
    } else if (pageName == "login") {
      // this.nav.push(LoginPage);
      this.isLoggedIn = true;
    } else if (pageName == "cart") {
      let modal = this.modalCtrl.create(CartModalPage);
      modal.present();
    } else if (pageName == 'orders') {
      this.nav.push(OrderListPage);
    } else if (pageName == "logout") {
      // this.nav.push("");
      this.storage.remove("userLoginInfo").then(() => {
        this.user = {};
        this.isLoggedIn = false;
      })
    }
  }
}
