import { BasicData } from "./basicData.model";
import { PaymentType } from "./payment-type.model";
import { Category } from "./category.model";
import { Tag } from "./tag.model";

export interface Product {
  id?: number,
  basicData: BasicData[],
  paymentType: PaymentType[],
  price?: number,
  categories?: Category,
  discount?: number,
  tags?: Tag[],
  imgUrl: string[],
  relatedProductsIds?:number[]
}
