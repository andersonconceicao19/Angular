import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './Pages/Accout/login-page/login-page.component';
import { ResetPasswordPageComponent } from './Pages/Accout/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './Pages/Accout/signup-page/signup-page.component';
import { PetsPageComponent } from './Pages/Accout/pets-page/pets-page.component';
import { ProductPageComponent } from './Pages/Store/product-page/product-page.component';
import { CartPageComponent } from './Pages/Store/cart-page/cart-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
