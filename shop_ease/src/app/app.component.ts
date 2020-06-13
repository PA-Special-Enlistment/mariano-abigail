import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, ModalController, AlertController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { ProductsByCategoryPage } from "../pages/products-by-category/products-by-category";
import { ProductManager } from "../models/ProductManager";
import { Brand } from "../models/Brand";
import { SignupPage } from "../pages/signup/signup";
import { LoginPage } from "../pages/login/login";
import { CartModalPage } from "../pages/cart-modal/cart-modal";
import { Storage } from "@ionic/storage";
import { OrderListPage } from "../pages/order-list/order-list";
import { ShopEaseService } from "../services/shop_ease.service";

@Component({
  templateUrl: "app.html"
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  brands: Brand[] = [];
  isLoggedIn = false;
  user: any;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public productManager: ProductManager,
    public modalCtrl: ModalController,
    public storage: Storage,
    public shopEaseService: ShopEaseService,
    public alertCtrl: AlertController
  ) {
    this.brands = [];
    this.user = {};
    this.initializeApp();
    this.getBrands();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.shopEaseService.credentials.subscribe(response => {
      if (response) {
        this.isLoggedIn = true;
        this.user = response;
        console.log("Creds ", response);
      } else {
        this.isLoggedIn = false;
      }
    });

    this.storage.ready().then(() => {
      this.storage.get("userLoginInfo").then(data => {
        if (data) {
          console.log("User logged in..... ", data);
          this.user = data;
          this.isLoggedIn = true;
        } else {
          console.log("No user found.");
          this.user = {};
          this.isLoggedIn = false;
        }
      });
    });
  }

  getBrands() {
    let brand1 = new Brand();
    brand1.id = 1;
    brand1.name = "Adidas";
    brand1.description = "All in or Nothing";
    brand1.logoUrl =
      "https://cloud.melijoe.com/p/f58b2842_1549938601_z_adidas-originals_252960_B.jpg";

    let brand2 = new Brand();
    brand2.id = 2
    brand2.name = "Nike";
    brand2.description = "Just Do It";
    brand2.logoUrl =
      "https://n.sinaimg.cn/front/462/w241h221/20190313/QNkr-hufnxfn0149679.jpg";

    let brand3 = new Brand();
    brand3.id = 3;
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

  openProductsByCategoryPage(id) {
    this.nav.setRoot(ProductsByCategoryPage, { brand_id: id });
  }

  openPage(pageName: string) {
    if (pageName == "signup") {
      this.nav.push(SignupPage);
    } else if (pageName == "login") {
      this.nav.push(LoginPage);
      // this.isLoggedIn = true;
    } else if (pageName == "cart") {
      let modal = this.modalCtrl.create(CartModalPage);
      modal.present();
    } else if (pageName == "orders") {
      this.nav.push(OrderListPage);
    }
  }

  logout() {
    this.storage.remove("userLoginInfo").then(() => {
      this.user = {};
      this.isLoggedIn = false;

      this.alertCtrl
        .create({
          title: "Logout",
          message: "It's sad to see you go.. we'll miss you!",
          buttons: ["OK"]
        })
        .present();
    });
  }
}
