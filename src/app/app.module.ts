import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeaderComponent } from './core/top-header/top-header.component';
import { FooterComponent } from './core/footer/footer.component';
import { ProductListingComponent } from './layout/products/product-listing/product-listing.component';
import { CategoriesListningComponent } from './layout/products/categories-listning/categories-listning.component';
import { ProductItemComponent } from './layout/products/product-item/product-item.component';
import { FiltersComponent } from './layout/products/filters/filters.component';
import { FilterItemComponent } from './layout/products/filter-item/filter-item.component';
import { DropDownComponent } from './shared/drop-down/drop-down.component';
import { productService } from './_services/productService.service';
import { AutocompleteLibModule } from 'angular-ng-autocomplete';
import { AddProductComponent } from './layout/products/add-product/add-product.component';
import { PaymentTypeComponent } from './shared/payment-types/payment-types.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { ProductDetailsComponent } from './layout/products/product-details/product-details.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './core/home/home.component';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MyInterseptorService } from './_services/my-interseptor.service';

// import { ProductModule } from './layout/products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    TopHeaderComponent,
    FooterComponent,
    // ProductListingComponent,
    // CategoriesListningComponent,
    // ProductItemComponent,
    // FiltersComponent,
    // FilterItemComponent,
    DropDownComponent,
    // AddProductComponent,
    PaymentTypeComponent,
    NotFoundComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    // ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AutocompleteLibModule,
    FormsModule,
    // ProductModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS,useClass:MyInterseptorService,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
