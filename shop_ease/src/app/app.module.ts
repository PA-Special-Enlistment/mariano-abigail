import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ProductsByCategoryPage } from '../pages/products-by-category/products-by-category';
import { ProductDetailsPage } from '../pages/product-details/product-details';
import { ProductManager } from '../models/ProductManager';
import { IonicStorageModule } from '@ionic/storage';
import { CartModalPage } from '../pages/cart-modal/cart-modal';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { CheckoutPage } from '../pages/checkout/checkout';
import { OrderListPage } from '../pages/order-list/order-list';
import { OrderDetailsPage } from '../pages/order-details/order-details';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductsByCategoryPage,
    ProductDetailsPage,
    CartModalPage,
    SignupPage,
    LoginPage,
    CheckoutPage,
    OrderListPage,
    OrderDetailsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductsByCategoryPage,
    ProductDetailsPage,
    CartModalPage,
    SignupPage,
    LoginPage,
    CheckoutPage,
    OrderListPage,
    OrderDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductManager
  ]
})
export class AppModule {}
