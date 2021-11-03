import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AutocompleteLibModule } from "angular-ng-autocomplete";
import { AuthGuardService } from "src/app/_services/auth-guard.service";
import { AddProductComponent } from "./add-product/add-product.component";
import { CategoriesListningComponent } from "./categories-listning/categories-listning.component";
import { FilterItemComponent } from "./filter-item/filter-item.component";
import { FiltersComponent } from "./filters/filters.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { ProductItemComponent } from "./product-item/product-item.component";
import { ProductListingComponent } from "./product-listing/product-listing.component";

@NgModule({
  declarations:[
    AddProductComponent,
    CategoriesListningComponent,
    FilterItemComponent,
    FiltersComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    ProductListingComponent
  ],
  imports:[
  FormsModule,
  CommonModule,
  AutocompleteLibModule,
  RouterModule.forChild([
    {path:'',children:[
      {path:'listing',component:ProductListingComponent},
      {path:'add',component:AddProductComponent,canActivate:[AuthGuardService]},
      {path:'edit/:productId',component:AddProductComponent},
      {path:'details/:id',component:ProductDetailsComponent},
    ]},
  ])

],
  exports:[],
})
export class ProductModule{}
