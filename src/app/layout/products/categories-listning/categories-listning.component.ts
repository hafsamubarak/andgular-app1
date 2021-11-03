import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { productService } from 'src/app/_services/productService.service';
import { Product } from 'src/app/_models/product.model';

@Component({
  selector: 'app-categories-listning',
  templateUrl: './categories-listning.component.html',
  styleUrls: ['./categories-listning.component.scss']
})
export class CategoriesListningComponent implements OnInit {
  @Input() data!: Product[];
  public keyword="name";
  // data=[
  //   {name:"Camera"},
  //   {name:"Photo Camera"},
  //   {name:"Laptop"},
  //   {name:"Mobile"},
  //   {name:"Mac"},
  // ]
  constructor(private productService:productService) {
   }

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(
      (res)=>{
        this.data=res.product;
      }
    );
  }

}
