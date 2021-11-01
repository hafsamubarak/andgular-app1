import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './layout/products/add-product/add-product.component';
import { ProductDetailsComponent } from './layout/products/product-details/product-details.component';
import { ProductListingComponent } from './layout/products/product-listing/product-listing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:ProductListingComponent},
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'product/listing',component:ProductListingComponent},
  {path:'product/add',component:AddProductComponent},
  {path:'product/edit/:productId',component:AddProductComponent},
  {path:'product/details/:id',component:ProductDetailsComponent},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
