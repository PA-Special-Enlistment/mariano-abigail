import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { User } from "../../models/User";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {

  newUser = new User();
  billing_shipping_same = false;
  signupForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.setSignupForm();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  setSignupForm() {
    this.signupForm = this.formBuilder.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      s_address_1: ['', Validators.required],
      s_address_2: [''],
      s_country: ['Philippines', Validators.required],
      s_province: ['', Validators.required],
      s_city: ['', Validators.required],
      s_phone: ['', Validators.required],
      b_address_1: ['', Validators.required],
      b_address_2: [''],
      b_country: ['Philippines', Validators.required],
      b_province: ['', Validators.required],
      b_city: ['', Validators.required],
      b_phone: ['', Validators.required],
    });
  }

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;
  }

  checkEmail() {
    if (!this.isEmailValid()) {
      alert("Email's format is invalid!");
    }
  }

  checkPassword() {
    if (!this.isPasswordValid()) {
      alert(
        "Password is invalid! Should contain at least one digit, one lower case, least one upper case, and atleast 8 characters."
      );
    }
  }

  checkConfirmPassword() {
    if (this.newUser.password != this.newUser.confirm_password) {
      alert("Password did not match!");
    }
  }

  //Validations

  isEmailValid() {
    let emailRegex = RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}");

    if (emailRegex.test(this.newUser.email)) {
      console.log("Email is valid.");
      return true;
    } else {
      console.log("Email is invalid.");
      return false;
    }
  }

  isPasswordValid() {
    let passwordRegex = RegExp(
      "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"
    );

    if (passwordRegex.test(this.newUser.password)) {
      console.log("Password is valid.");
      return true;
    } else {
      console.log("Password is invalid.");
      return false;
    }
  }

  signup() {
    //TODO: add field validation here
    if (!this.isDataValid()) {
      alert("Form is invalid!");
      return;
    } else {
      alert("Valid!")
      let userData = {
        user: {}
      };

      if (this.billing_shipping_same) {
        this.newUser.billing_address = this.newUser.shipping_address;
      }

      userData.user = {
        email: this.newUser.email,
        last_name: this.newUser.last_name,
        first_name: this.newUser.first_name,
        username: this.newUser.username,
        password: this.newUser.password,
        shipping_address: {
          address_1: this.newUser.shipping_address.address_1,
          address_2: this.newUser.shipping_address.address_2,
          country: this.newUser.shipping_address.country,
          province: this.newUser.shipping_address.province,
          city: this.newUser.shipping_address.city,
          phone: this.newUser.shipping_address.phone
        },
        billing_address: {
          address_1: this.newUser.billing_address.address_1,
          address_2: this.newUser.billing_address.address_2,
          country: this.newUser.billing_address.country,
          province: this.newUser.billing_address.province,
          city: this.newUser.billing_address.city,
          phone: this.newUser.billing_address.phone
        }
      };

      //TODO: Save data to db
    }
  }

  isDataValid() {
    //Check if fields are valid
    let isValid = false;

    if ((this.newUser.last_name == "")) {
      alert("Last name is required!");
      return;
    }

    if ((this.newUser.first_name == "")) {
      alert("First name is required!");
      return;
    }

    if ((this.newUser.email == "")) {
      alert("Email is required!");
      return;
    }

    this.checkEmail();

    if ((this.newUser.username == "")) {
      alert("Username is required!");
      return;
    }

    if ((this.newUser.password == "")) {
      alert("Password is required!");
      return;
    }

    this.checkPassword();

    if ((this.newUser.confirm_password == "")) {
      alert("Confirm password is required!");
      return;
    }

    this.checkConfirmPassword();

    if (this.newUser.billing_address.address_1 == "") {
      alert("Billing Address 1 is required!");
      return;
    }

    if (this.newUser.billing_address.phone == "") {
      alert("Billing Phone is required!");
      return;
    }

    if (this.newUser.shipping_address.address_1 == "") {
      alert("Shipping Address 1 is required!");
      return;
    }

    if (this.newUser.shipping_address.phone == "") {
      alert("Shipping Phone is required!");
      return;
    }

    isValid = true;
    alert(isValid)
    return isValid;
  }
}
