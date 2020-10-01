import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './guards/authorized.guard';
import { FrameComponent } from './pages/shared/frame/frame.component';

const routes: Routes = [
  {path: 'login', loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginPageModule) },
  {
    path: '',
    component: FrameComponent,
    canActivate: [AuthorizedGuard],
    children: [
      { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
      {
        path: 'orders',
        loadChildren: () => import('./pages/store/orders/orders.module').then( m => m.OrdersPageModule)
      },
      {
        path: 'orders/:number',
        loadChildren: () => import('./pages/store/orders-details/orders-details.module').then( m => m.OrdersDetailsPageModule)
      },
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
