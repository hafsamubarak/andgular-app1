import { EventEmitter, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../_models/product.model";
// import { CategoryService } from "./category.service";
@Injectable({
  providedIn: 'root'
})

export class productService{

 private products:Product[]=[
    {id:1,basicData:[{id:1,name:"Camera",desription:"this is Camera",language:{id:1,name:"English"}}],categories:{id:1,name:"Electronics"},paymentType:[{id:1,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,3,4,5]},
    {id:2,basicData:[{id:2,name:"Photo Camera",desription:"this is Photo Camera",language:{id:2,name:"Arabic"}}],categories:{id:2,name:"Electronics"},paymentType:[{id:2,name:"Visa"}], price:200, discount:50,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[5,1,4,2]},
    {id:3,basicData:[{id:3,name:"Laptop",desription:"this is Laptop",language:{id:3,name:"English"}}],categories:{id:3,name:"Electronics"},paymentType:[{id:3,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[3,3,4,5]},
    {id:4,basicData:[{id:4,name:"Mobile",desription:"this is Mobile",language:{id:4,name:"English"}}],categories:{id:4,name:"Electronics"},paymentType:[{id:1,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,3,4,6]},
    {id:5,basicData:[{id:5,name:"Mac",desription:"this is Mac",language:{id:5,name:"English"}}],categories:{id:5,name:"Electronics"},paymentType:[{id:5,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,2,4,4]},
    {id:6,basicData:[{id:6,name:"Iphone",desription:"this is Iphone",language:{id:6,name:"English"}}],categories:{id:6,name:"Electronics"},paymentType:[{id:6,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[7,5,4,2]},
    {id:7,basicData:[{id:7,name:"Printer",desription:"this is Printer",language:{id:7,name:"English"}}],categories:{id:7,name:"Electronics"},paymentType:[{id:7,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[3,6,7,2]},
    {id:8,basicData:[{id:8,name:"Scanner",desription:"this is Scanner",language:{id:8,name:"English"}}],categories:{id:8,name:"Electronics"},paymentType:[{id:8,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,6,2,4]},
    {id:9,basicData:[{id:9,name:"Camera2",desription:"this is Camera2",language:{id:9,name:"English"}}],categories:{id:9,name:"Electronics"},paymentType:[{id:9,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[4,5,2,8]},
    {id:10,basicData:[{id:10,name:"Iphone",desription:"this is Iphone",language:{id:10,name:"English"}}],categories:{id:10,name:"Electronics"},paymentType:[{id:10,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,7,2,5]},
    {id:11,basicData:[{id:11,name:"Printer",desription:"this is Printer",language:{id:11,name:"English"}}],categories:{id:11,name:"Electronics"},paymentType:[{id:11,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,3,2,4]},
    {id:12,basicData:[{id:1,name:"Scanner",desription:"this is Scanner",language:{id:12,name:"English"}}],categories:{id:12,name:"Electronics"},paymentType:[{id:12,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[8,2,4,4]},
    {id:13,basicData:[{id:13,name:"Camera2",desription:"this is Camera2",language:{id:13,name:"English"}}],categories:{id:13,name:"Electronics"},paymentType:[{id:13,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,3,4,9]},
    {id:14,basicData:[{id:14,name:"Printer",desription:"this is Printer",language:{id:14,name:"English"}}],categories:{id:14,name:"Electronics"},paymentType:[{id:14,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,8,4,5]},
    {id:15,basicData:[{id:15,name:"Scanner",desription:"this is Scanner",language:{id:15,name:"English"}}],categories:{id:15,name:"Electronics"},paymentType:[{id:15,name:"Visa"}], price:100, discount:30,imgUrl:["../../assets/img/laptop.jpg"],relatedProductsIds:[2,8,2,6]},
    // {id:16,name:"Camera2", price:13840,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:17,name:"Iphone", price:25000, discount:60,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:18,name:"Printer", price:130, discount:80,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:19,name:"Scanner", price:1490, discount:20,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:20,name:"Camera2", price:13840,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:21,name:"Printer", price:130, discount:80,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:22,name:"Scanner", price:1490, discount:20,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:23,name:"Camera2", price:13840,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:24,name:"Iphone", price:25000, discount:60,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:25,name:"Printer", price:130, discount:80,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:26,name:"Scanner", price:1490, discount:20,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:27,name:"Camera2", price:13840,imgUrl:"../../assets/img/laptop.jpg"},
    // {id:28,name:"Camera2", price:13840,imgUrl:"../../assets/img/laptop.jpg"}
  ];
 public itemAdded=new EventEmitter<Product>();
 public productChanged=new EventEmitter<Product[]>();
  getAllProducts():any{
    this.productChanged.emit([...this.products]);
    // return this.productChanged;
    // return this.products.slice();
    // or
    return [...this.products]
  }
  getProductById(id:number):Product | undefined{
    return this.products.find((product)=>product.id===id);
  }
  addProduct(product:Product):Product[]{
    this.products.push(product);
    this.productChanged.emit([...this.products])
    return [...this.products,product];
  }
  updateProduct(product:Product):Product[]{
    const index=  this.products.findIndex((p)=>p.id===product.id);
    this.products[index]=product;
    this.productChanged.emit([...this.products]);
    return [...this.products];
  }
  public itemDeleted=new EventEmitter<Product[]>();
  deleteProduct(id:number | undefined):any{
    const index=  this.products.findIndex((p)=>p.id===id);
    this.products.splice(index,1);
    this.productChanged.emit([...this.products]);
    return this.itemDeleted.emit( [...this.products]);
  }
}
