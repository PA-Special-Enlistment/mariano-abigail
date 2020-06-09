import { Component, ViewChild } from "@angular/core";
import { NavController, Slides, ToastController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  @ViewChild("productSlides") productSlides: Slides;

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    setInterval(() => {
      if (this.productSlides.getActiveIndex() == 3)
        this.productSlides.slideTo(0);

      this.productSlides.slideNext();
    }, 3000);
  }

  loadMoreProducts() {}
}
