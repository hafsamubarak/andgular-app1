import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-top-header',
  templateUrl: './top-header.component.html',
  styleUrls: ['./top-header.component.scss'],
  // providers:[productService]
})
export class TopHeaderComponent implements OnInit {
 arrayOfProducts:Product[]=[];
// cartIsOpen: boolean =false;
// productService:productService=new productService();
  constructor(private productService:productService) { }

  ngOnInit(): void {

    this.productService.itemAdded.subscribe(
      (next)=>{
        this.arrayOfProducts.push(next);
        console.log(next)
      },
      (error)=>{},
      ()=>{}
    )
  }

}
