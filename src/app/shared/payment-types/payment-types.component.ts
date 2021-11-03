import { Component, OnInit } from '@angular/core';
import { PaymentType } from 'src/app/_models/payment-type.model';
@Component({
  selector: 'app-payment-types',
  templateUrl: './payment-types.component.html',
  styleUrls: ['./payment-types.component.scss']
})
export class PaymentTypeComponent implements OnInit {
  paymentTypeMethods:PaymentType[];
  constructor() {
    this.paymentTypeMethods=[
      {id:1,name:"Direct Bank Transfare"},
      {id:2,name:"Cheque Payment"},
      {id:3,name:"Paypal"},
      {id:4,name:"Visa"},
      {id:5,name:"Mastercard"},
      {id:6,name:"On Dilivery"}
    ]
  }

  ngOnInit(): void {
  }

}
