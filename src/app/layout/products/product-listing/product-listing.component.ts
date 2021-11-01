import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/_models/product.model';
import {productService} from 'src/app/_services/productService.service';


@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.scss']
})
export class ProductListingComponent implements OnInit {
@Input() productListArray!: Product[];
@Input() pageSize:number=9;
// @Output() outputItem: EventEmitter<Product>;
numOfPagesArray:number[]=[];
productOfArrayToBeViewed:Product[]=[];
currentPage:number=0
// productService=new productService;

  constructor(private productService:productService) {
    // this.productListArray=
    // this.outputItem=new EventEmitter<Product>();

  }

  ngOnInit(): void {
    this.productListArray=this.productService.getAllProducts();
    this.sliceArray();
    // this.calculatePageNumber();
     this.productService.productChanged.subscribe(
      (res)=>{
        this.productListArray=res;
        this.sliceArray();
        this.calculatePageNumber();
      });

    this.productService.itemDeleted.subscribe(
      (next)=>{
        this.productListArray=next;
        this.sliceArray();
        console.log('hi');
        // this.productListArray.shift();
        // console.log(next.id);
      },
      (error)=>{},
      ()=>{}
    )
  }
  calculatePageNumber(){
    const numberOfPages= Math.ceil(this.productListArray.length / this.pageSize);
    for (let index = 0; index < numberOfPages; index++) {
      this.numOfPagesArray.push(index+1)
    }
  }
  newItemAdded(product :Product){
    console.log(product);
    // this.outputItem.emit(product);
  }
  sliceArray(){
    this.productOfArrayToBeViewed=this.productListArray.slice(this.currentPage * this.pageSize,(this.currentPage * this.pageSize)+this.pageSize);

  }
  onPagination(i:number){
    if(i>-1 && i< this.numOfPagesArray.length){
    this.currentPage=i;
    this.sliceArray();
    }
  }
}
