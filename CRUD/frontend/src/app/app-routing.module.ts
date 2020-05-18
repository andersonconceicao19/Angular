
import { Routes, RouterModule } from '@angular/router';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';

 const routes: Routes = 
 [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductCrudComponent },
    { path: 'product/create', component: ProductCreateComponent }
 ]

 export const RoutingModule = RouterModule.forRoot(routes);

