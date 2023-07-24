import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Category } from 'src/api/category/model/category.model';
import { ProductOrder } from 'src/api/product-order/model/product-order.model';
import { VendorProduct } from 'src/api/vendor-product/model/vendor-product.model';


@ObjectType()
export class Product {
  @Field(() => Number, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  uuid?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => String, { nullable: true })
  description?: string;
  @Field(() => String, { nullable: true })
  images?: string[];
  @Field(() => Number, { nullable: true })
  price?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
  @Field(() => String, { nullable: true })
  category?: Category;
  @Field(() => VendorProduct, { nullable: true })
  vendorProduct?: VendorProduct;
  @Field(() => [ProductOrder], { nullable: true })//thats how you tell its going to be an array
  productOrder?: ProductOrder[];
}
