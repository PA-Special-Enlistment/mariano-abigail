import { Component } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { User } from "../../models/User";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { ShopEaseService } from "../../services/shop_ease.service";
import { LoginPage } from "../login/login";

@Component({
  selector: "page-signup",
  templateUrl: "signup.html"
})
export class SignupPage {
  userForm: FormGroup;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    private shopEaseService: ShopEaseService,
    private alertCtrl: AlertController
  ) {
    this.setUserFormValidationn();
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad SignupPage");
  }

  setUserFormValidationn() {
    this.userForm = this.formBuilder.group({
      last_name: ["", Validators.required],
      first_name: ["", Validators.required],
      email: ["", Validators.required],
      username: ["", Validators.required],
      password: ["", Validators.required],
      confirm_password: ["", Validators.required],
      s_address: ["", Validators.required],
      s_country: ["", Validators.required],
      s_province: ["", Validators.required],
      s_city: ["", Validators.required],
      s_phone: ["", Validators.required]
    });
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
    //TODO: add field validation here
    if (this.userForm.invalid) {
      console.log("UserForm is invalid");
      this.alertCtrl
      .create({
        title: "Invalid",
        message:
          "Please fill all required fields.",
        buttons: ["OK"]
      })
      .present();
      let invalid_controls = this.findInvalidControls();
      console.log("Invalid fields: ", invalid_controls);
      return;
    } else {
      console.log("UserForm is valid");
      let userData = {
        user: {}
      };

      userData.user = {
        email: this.userForm.value.email,
        last_name: this.userForm.value.last_name,
        first_name: this.userForm.value.first_name,
        username: this.userForm.value.username,
        password: this.userForm.value.password,
        address: this.userForm.value.s_address,
        country: this.userForm.value.s_country,
        province: this.userForm.value.s_province,
        city: this.userForm.value.s_city,
        phone: this.userForm.value.s_phone
      };

      this.shopEaseService.signup(userData.user).subscribe(data => {
        console.log("Response: ", data);

        if (data) {
          this.alertCtrl
            .create({
              title: "Sign Up Successful",
              message: "You will be redirected to Login page",
              buttons: [
                {
                  text: "OK",
                  handler: () => {
                    this.userForm.reset();
                    this.navCtrl.push(LoginPage);
                  }
                }
              ]
            })
            .present();
        } else {
          this.alertCtrl
            .create({
              title: "Failed to Sign Up",
              message:
                "Please fill all required fields and make sure it's valid.",
              buttons: ["OK"]
            })
            .present();
        }
      });
    }
  }
}
