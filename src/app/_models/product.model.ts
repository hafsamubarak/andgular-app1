import { data } from "./data.model";
import { PaymentType} from "./payment-type.model";
import { Category } from "./category.model";
import { Tag } from "./tag.model";

export interface Product {
  id?: number,
  data: data[],
  paymentType: PaymentType[],
  price?: number,
  categoryId?: number,
  discount?: number,
  tags?: Tag[],
  imagesUrls: string[],
  relatedProductsIds?:number[]
}
