import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss'],
  // providers:[productService]
})
export class ProductItemComponent implements OnInit {
@Input() product!: Product;
// @Output() itemAdded = new EventEmitter<Product>();
// productService:productService=new productService();
  constructor(private productService:productService) {
    // this.product={
    //   name:"Camera",
    //   price:100,
    //   imagesUrls:"../../assets/img/laptop.jpg",
    //   discount:30
    // }
    // productService.deleteProduct(this.product.id);
   }

  ngOnInit(): void {

  }
  getPrice(){
    return this.product.price? this.product.discount
    ? this.product.price- this.product.discount
    :this.product.price:0;
  }
  itemAddedToCart(){
    this.productService.itemAdded.emit(this.product)
  }
  deleteProduct(){
   this.productService.deleteProduct(this.product.id);
    // this.productService.itemDeleted.emit(this.product);
    console.log(this.product.id);
  }


}
// function id(id: any) {
//   throw new Error('Function not implemented.');
// }

