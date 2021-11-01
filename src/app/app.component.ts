import { Component } from '@angular/core';
import { Product } from './_models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  productArray:Product[]=[]
  title = 'app2';
  // outputItemAdded(product: Product){
  //   console.log(product);
  //   this.productArray.push(product);
  // }
}
