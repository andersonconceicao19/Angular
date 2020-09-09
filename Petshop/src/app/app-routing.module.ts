import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPageComponent } from './Pages/Accout/login-page/login-page.component';
import { FramePageComponent } from './pages/master/frame-page/frame-page.component';
import { ProductPageComponent } from './Pages/Store/product-page/product-page.component';
import { CartPageComponent } from './Pages/Store/cart-page/cart-page.component';
import { SignupPageComponent } from './Pages/Accout/signup-page/signup-page.component';
import { ResetPasswordPageComponent } from './Pages/Accout/reset-password-page/reset-password-page.component';
import { PetsPageComponent } from './Pages/Accout/pets-page/pets-page.component';

const routes: Routes = [
  {
    path: '',
    component: FramePageComponent,
    children: [
      {path: '', component: ProductPageComponent},
      {path: 'cart', component: CartPageComponent}
    ]
  },
  {
    path: 'accout',
    component: FramePageComponent,
    children: [
      {path: 'pets', component: PetsPageComponent}
    ]
  },
  {path: 'login', component: LoginPageComponent},
  {path: 'signup', component: SignupPageComponent},
  {path: 'reset-password', component: ResetPasswordPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
