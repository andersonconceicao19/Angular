import { Routes, RouterModule } from '@angular/router';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { HomeComponent } from './views/home/home.component';


 const routes: Routes = 
 [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductCrudComponent }
 ]

 export const RoutingModule = RouterModule.forRoot(routes);

