import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { HomeComponent } from './core/home/home.component';
import { AddProductComponent } from './layout/products/add-product/add-product.component';
import { ProductDetailsComponent } from './layout/products/product-details/product-details.component';
import { ProductListingComponent } from './layout/products/product-listing/product-listing.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',redirectTo:'',pathMatch:'full'},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'product',loadChildren:()=> import('./layout/products/product.module').then(m => m.ProductModule)},
  {path:'**',component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules,scrollPositionRestoration:'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
