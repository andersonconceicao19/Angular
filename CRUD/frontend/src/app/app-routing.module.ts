
import { Routes, RouterModule } from '@angular/router';

import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { HomeComponent } from './views/home/home.component';
import { ProductCreateComponent } from './component/product/product-create/product-create.component';
import { ProductUpdateComponent } from './component/product/product-update/product-update.component';
import { ProductRemoveComponent } from './component/product/product-remove/product-remove.component';

 const routes: Routes = 
 [
    { path: '', component: HomeComponent },
    { path: 'product', component: ProductCrudComponent },
    { path: 'product/create', component: ProductCreateComponent },
    { path: 'product/update/:id', component: ProductUpdateComponent },
    { path: 'product/remove/:id', component: ProductRemoveComponent }
 ]

 export const RoutingModule = RouterModule.forRoot(routes);

