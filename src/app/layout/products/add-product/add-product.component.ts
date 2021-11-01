import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/_models/category.model';
import { PaymentType } from 'src/app/_models/payment-type.model';
import { Product } from 'src/app/_models/product.model';
import { CategoryService} from 'src/app/_services/category.service';
import { PaymentTypeService} from 'src/app/_services/payment-type.service'
import { productService } from 'src/app/_services/productService.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  // @ViewChild('txtInput') nameInput!:ElementRef;
  @ViewChild('myForm') form!:ElementRef;
  @ViewChild('txtInput') nameInput!:ElementRef;
  category!: Category[];
  paymentTypeMethods!:PaymentType[];
  product= <Product>{};
  isEditMode=false;

  constructor(private categoryService :  CategoryService,
              private paymentTypeService: PaymentTypeService,
              private productService:productService,
              private router:Router,
              private activatedRoute:ActivatedRoute
             ) {

        this.product={
       basicData:[{}],
       paymentType:[{}],
       tags:[],
       imgUrl:[]

    }
   }

  ngOnInit(): void {
    this.category=this.categoryService.getAllCategories();
    this.paymentTypeMethods=this.paymentTypeService.getAllPaymentTypes();
    const productID=this.activatedRoute.snapshot.params.productId;
    console.log(productID);
    const product=this.productService.getProductById(+productID);
    console.log(product);
    if(product){
      this.product={...product};
      this.isEditMode=true;
    }
  }
  onSubmit(form:NgForm,txtInput:NgModel){
    // this.product={
    //    id:1,
    //    basicData:[{id:1,name:"",desription:"",language:{id:1,name:"English"}}],
    //    categories:{id:1,name:"Electronics"},
    //    paymentType:[{id:1,name:"Visa"}],
    //    price:100,
    //    discount:30,
    //    imgUrl:["../../assets/img/laptop.jpg"]

    // }
  //  this.product={...form.value};
    const cat=this.categoryService.getCategoryById(+form.value.category);
    // const newProduct=<Product>();
    // this.product={basicData:[{name:form.value.nameInputField,desription:form.value.descriptionInputField,language:{id:1,name:"English"}}],
    // categories:{name:""},
    // paymentType:[{id:1,name:"Visa"}],
    // price:100,
    // discount:30,
    // imgUrl:["../../assets/img/laptop.jpg"]};
    // this.product.basicData[0].name=form.value.nameInputField;
    // this.product.basicData[0].desription=form.value.descriptionInputField;
    if(cat){
      this.product.categories=cat;
    }
    this.product.paymentType=[];
    for (let index = 0; index < this.paymentTypeMethods.length; index++) {
      if(form.value['check_'+index]){
        this.product.paymentType.push(this.paymentTypeMethods[index]);
      }

    }
    if(this.isEditMode){
      this.productService.updateProduct(this.product);
    }else{
      this.productService.addProduct(this.product);
    }
    this.productService.addProduct(this.product);
    //route to product-list
    this.router.navigateByUrl('home');

    console.log(this.product);
    console.log('txtInput: ',txtInput)
  }
  // onPaymentTypeChecked(index:number,myForm:NgForm){
  //   // const myForm=this.form.nativeElement as NgForm;
  //   this.product.paymentType=[];

  // }
  // onInputChanged(name:string){
  //   this.product.basicData[0].name=name;
  // }

  onTagAdded(tagInput:HTMLInputElement){
    if(!this.product.tags){
      this.product.tags=[];
    }
   this.product.tags?.push({name:tagInput.value});
   tagInput.value='';
  }
}
