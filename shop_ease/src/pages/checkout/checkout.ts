import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ShopEaseService } from "../../services/shop_ease.service";
import { Storage } from "@ionic/storage";
import { User } from "../../models/User";
import { OrderDetailsPage } from "../order-details/order-details";
import { HomePage } from "../home/home";

@Component({
  selector: "page-checkout",
  templateUrl: "checkout.html"
})
export class CheckoutPage {
  orderForm: FormGroup;
  paymentMethods: any[];
  paymentMethod: any;
  user: any;
  cartItems: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public shopEaseService: ShopEaseService,
    public storage: Storage,
    public alertCtrl: AlertController
  ) {
    this.setOrderFormValidation();
    this.initializePaymentMethods();

    this.storage.get("userLoginInfo").then(data => {
      this.user = data;
      console.log("Checkout user ", data);

      this.orderForm.get("last_name").setValue(data.last_name);
      this.orderForm.get("first_name").setValue(data.first_name);
      this.orderForm.get("email").setValue(data.email);
      this.orderForm.get("s_address").setValue(data.address);
      this.orderForm.get("s_country").setValue(data.country);
      this.orderForm.get("s_province").setValue(data.province);
      this.orderForm.get("s_city").setValue(data.city);
      this.orderForm.get("s_phone").setValue(data.phone);
    });

    this.storage.get("cart").then(data => {
      this.cartItems = data;
      console.log("Checkout cart ", data);
    });
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CheckoutPage");
  }

  setOrderFormValidation() {
    this.orderForm = this.formBuilder.group({
      last_name: ["", Validators.required],
      first_name: ["", Validators.required],
      email: ["", Validators.required],
      s_address: ["", Validators.required],
      s_country: ["PH", Validators.required],
      s_province: ["Nueva Ecija", Validators.required],
      s_city: ["Lupao", Validators.required],
      s_phone: ["", Validators.required],
      payment_method: ["", Validators.required]
    });
  }

  initializePaymentMethods() {
    this.paymentMethods = [
      { method_id: "cod", method_title: "Cash on Delivery" },
      { method_id: "paypal", method_title: "Paypal" }
      // { method_id: "gcash", method_title: "GCash" },
      // { method_id: "wechat", method_title: "WechatPay" }
    ];
  }

  findInvalidControls() {
    const invalid = [];
    const controls = this.orderForm.controls;
    for (const name in controls) {
      if (controls[name].invalid) {
        invalid.push(name);
      }
    }
    return invalid;
  }

  checkout() {
    //TODO: add field validation here
    if (this.orderForm.invalid) {
      alert("Orderform is invalid");
      let invalid_controls = this.findInvalidControls();
      console.log("Invalid fields: ", invalid_controls);
      return;
    } else {
      console.log("UserForm is valid");
      let orderData = {};

      let total = 0;
      let items = [];

      this.cartItems.forEach((item, index) => {
        total += item.product.price * item.qty;
        items.push({
          product_id: item.product.id,
          qty: item.qty
        });
      });

      orderData = {
        customer_id: this.user.id,
        products: items,
        payment_method: this.orderForm.value.payment_method,
        total: total
      };

      console.log("Order data = ", orderData);

      this.shopEaseService.checkout(orderData).subscribe(data => {
        console.log("Response: ", data);

        if (data) {
          this.storage.remove("cart");

          this.alertCtrl
            .create({
              title: "Checkout Successful",
              message: `Your order has been placed with Order Number ${data.sales_id}.`,
              buttons: [
                {
                  text: "OK",
                  handler: () => {
                    this.navCtrl.popToRoot();
                  }
                },
                {
                  text: "View Order",
                  handler: () => {
                    this.navCtrl.push(OrderDetailsPage, { order: data });
                  }
                }
              ]
            })
            .present();
        } else {
          alert("Failed to place oreder");
        }
      });

      // this.http.post("http://127.0.0.1:8000/api/Signup", userData.user).subscribe(data => {
      //   console.log("Signup response ", data)
      // })
    }
  }
}
