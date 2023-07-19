import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Category, ProductOrder, VendorProduct } from '@prisma/client';

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
  @Field(() => String, { nullable: true })
  vendorProduct?: VendorProduct;
  @Field(() => String, { nullable: true })
  productOrder?: ProductOrder[];
}
