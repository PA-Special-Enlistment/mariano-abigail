import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { User } from "../../models/User";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {

  // newUser = new User();
  billing_shipping_same = false;
  userForm: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
    this.setUserFormValidationn();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  setUserFormValidationn() {
    this.userForm = this.formBuilder.group({
      last_name: ['', Validators.required],
      first_name: ['', Validators.required],
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirm_password: ['', Validators.required],
      s_address_1: ['', Validators.required],
      s_address_2: [''],
      s_country: ['', Validators.required],
      s_province: ['', Validators.required],
      s_city: ['', Validators.required],
      s_phone: ['', Validators.required],
      b_address_1: ['', Validators.required],
      b_address_2: [''],
      b_country: ['', Validators.required],
      b_province: ['', Validators.required],
      b_city: ['', Validators.required],
      b_phone: ['', Validators.required],
    });
  }

  setBillingToShipping() {
    this.billing_shipping_same = !this.billing_shipping_same;
    this.resetBillingInformationControl();
  }

  // checkEmail() {
  //   if (!this.isEmailValid()) {
  //     alert("Email's format is invalid!");
  //   }
  // }

  // checkPassword() {
  //   if (!this.isPasswordValid()) {
  //     alert(
  //       "Password is invalid! Should contain at least one digit, one lower case, least one upper case, and atleast 8 characters."
  //     );
  //   }
  // }

  // checkConfirmPassword() {
  //   if (this.newUser.password != this.newUser.confirm_password) {
  //     alert("Password did not match!");
  //   }
  // }

  //Validations

  // isEmailValid() {
  //   let emailRegex = RegExp("[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}");

  //   if (emailRegex.test(this.newUser.email)) {
  //     console.log("Email is valid.");
  //     return true;
  //   } else {
  //     console.log("Email is invalid.");
  //     return false;
  //   }
  // }

  // isPasswordValid() {
  //   let passwordRegex = RegExp(
  //     "/^(?=.*d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/"
  //   );

  //   if (passwordRegex.test(this.newUser.password)) {
  //     console.log("Password is valid.");
  //     return true;
  //   } else {
  //     console.log("Password is invalid.");
  //     return false;
  //   }
  // }

  findInvalidControls() {
    const invalid = [];
    const controls = this.userForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    return invalid;
}

  signup() {

    if (this.billing_shipping_same) {
      this.userForm.get('b_address_1').setValue(this.userForm.value.s_address_1);
      this.userForm.get('b_address_2').setValue(this.userForm.value.s_address_2);
      this.userForm.get('b_country').setValue(this.userForm.value.s_country);
      this.userForm.get('b_province').setValue(this.userForm.value.s_province);
      this.userForm.get('b_city').setValue(this.userForm.value.s_city);
      this.userForm.get('b_phone').setValue(this.userForm.value.s_phone);
    }
    
    //TODO: add field validation here
    if (this.userForm.invalid) {
      alert("Form is invalid!");
      let invalid_controls = this.findInvalidControls();
      console.log(invalid_controls)
      return;
    } else {
      alert("Valid!")
      let userData = {
        user: {}
      };

      userData.user = {
        email: this.userForm.value.email,
        last_name: this.userForm.value.last_name,
        first_name: this.userForm.value.first_name,
        username: this.userForm.value.username,
        password: this.userForm.value.password,
        shipping_address: {
          address_1: this.userForm.value.s_address_1,
          address_2: this.userForm.value.s_address_2,
          country: this.userForm.value.s_country,
          province: this.userForm.value.s_province,
          city: this.userForm.value.s_city,
          phone: this.userForm.value.s_phone
        },
        billing_address: {
          address_1: this.userForm.value.b_address_1,
          address_2: this.userForm.value.b_address_2,
          country: this.userForm.value.b_country,
          province: this.userForm.value.b_province,
          city: this.userForm.value.b_city,
          phone: this.userForm.value.b_phone
        }
      };

      //TODO: Save data to db
    }
  }
  
  resetBillingInformationControl() {
    this.userForm.get('b_address_1').reset;
    this.userForm.get('b_address_2').reset;
    this.userForm.get('b_country').reset;
    this.userForm.get('b_province').reset;
    this.userForm.get('b_city').reset;
    this.userForm.get('b_phone').reset;
  }
}
