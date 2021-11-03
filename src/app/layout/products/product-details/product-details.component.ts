import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/_models/product.model';
import { productService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
 product!:Product ;
 relatedProductsArray:Product[]=[];
  constructor(private productService:productService, private activatedRout:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.activatedRout.snapshot.data.pageName)
    const id=+this.activatedRout.params.subscribe(
      (res)=>{
        console.log(res.id);
         const product=this.productService.getProductById(+res.id);
    if(!product){
      alert('Error Happenned')
    }else{
      this.product=product;
      this.relatedProductsArray=[];
      this.relatedProductsArray.push()
      this.product.relatedProductsIds?.map((productId)=>{
        const rproduct=this.productService.getProductById(productId)
        rproduct && this.relatedProductsArray.push(rproduct);
      });
    }}
    )

  }

}
