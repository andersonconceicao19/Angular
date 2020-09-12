import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { LoginPageComponent } from './Pages/Accout/login-page/login-page.component';
import { ResetPasswordPageComponent } from './Pages/Accout/reset-password-page/reset-password-page.component';
import { SignupPageComponent } from './Pages/Accout/signup-page/signup-page.component';
import { PetsPageComponent } from './Pages/Accout/pets-page/pets-page.component';
import { ProductPageComponent } from './Pages/Store/product-page/product-page.component';
import { CartPageComponent } from './Pages/Store/cart-page/cart-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './Services/data.service';
import { ProductCardComponent } from './components/store/product-card/product-card.component';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResetPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponent,
    ProductPageComponent,
    CartPageComponent,
    FramePageComponent,
    ProductCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
