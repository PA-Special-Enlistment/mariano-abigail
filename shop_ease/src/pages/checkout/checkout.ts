import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "page-checkout",
  templateUrl: "checkout.html"
})
export class CheckoutPage {
  // newOrder: any;
  orderForm: FormGroup;
  paymentMethods: any[];
  paymentMethod: any;
  billing_shipping_same = false;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
  ) {
    // this.newOrder = {};
    this.setOrderFormValidation();
    this.initializePaymentMethods();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad CheckoutPage");
  }

  setOrderFormValidation() {
    this.orderForm = this.formBuilder.group({
      last_name: ["", Validators.required],
      first_name: ["", Validators.required],
      email: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      confirm_password: ["", Validators.required],
      s_address_1: ["", Validators.required],
      s_address_2: [""],
      s_country: ["", Validators.required],
      s_province: ["", Validators.required],
      s_city: ["", Validators.required],
      s_phone: ["", Validators.required],
      b_address_1: ["", Validators.required],
      b_address_2: [""],
      b_country: ["", Validators.required],
      b_province: ["", Validators.required],
      b_city: ["", Validators.required],
      b_phone: ["", Validators.required],
      paymentMethod: ["", Validators.required]
    });
  }

  initializePaymentMethods() {
    this.paymentMethods = [
      { method_id: "cod", method_title: "Cash on Delivery" },
      { method_id: "paypal", method_title: "Paypal" },
      // { method_id: "gcash", method_title: "GCash" },
      // { method_id: "wechat", method_title: "WechatPay" }
    ];
  }

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;
    this.resetBillingInformationControl();
  }

  resetBillingInformationControl() {
    this.orderForm.get("b_address_1").reset;
    this.orderForm.get("b_address_2").reset;
    this.orderForm.get("b_country").reset;
    this.orderForm.get("b_province").reset;
    this.orderForm.get("b_city").reset;
    this.orderForm.get("b_phone").reset;
  }

  disableOption(paymentMethod) {
    if (paymentMethod == "gcash" && paymentMethod == "wechat") {
      return true;
    }

    return false;
  }
}
