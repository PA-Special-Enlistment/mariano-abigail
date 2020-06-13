import { Component } from "@angular/core";
import { NavController, NavParams, ViewController } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { CheckoutPage } from "../checkout/checkout";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-cart-modal",
  templateUrl: "cart-modal.html"
})
export class CartModalPage {
  cartItems: any[] = [];
  total: any;
  showEmptyCartMessage: boolean = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public viewCtrl: ViewController
  ) {
    this.total = 0.0;

    this.getCartItems();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CartModalPage");
  }

  getCartItems() {
    this.storage.ready().then(() => {
      this.storage.get("cart").then(data => {
        console.log("Cart items in Storage = ", data);

        if (!data || data == null) {
          this.showEmptyCartMessage = true;
          return;
        } else {
          this.cartItems = data;

          if (this.cartItems.length > 0) {
            this.cartItems.forEach((item, index) => {
              this.total += item.product.price * item.qty;
            });
          }
        }
      });
    });
  }

  removeFromCart(item, i) {
    let price = item.product.price;
    let qty = item.qty;

    this.cartItems.splice(i, 1);

    this.storage.set("cart", this.cartItems).then(() => {
      this.total -= price * qty;
    });

    if (this.cartItems.length == 0) {
      this.showEmptyCartMessage = true;
    }
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  checkout() {
    if (this.cartItems.length == 0) {
      alert("You have 0 items. Failed to checkout.");
      return;
    } else {
      this.storage.get("userLoginInfo").then(data => {
        data ? this.navCtrl.push(CheckoutPage) : this.navCtrl.push(LoginPage, { next: CheckoutPage });
      });
    }
  }
}
