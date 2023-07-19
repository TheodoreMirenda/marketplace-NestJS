import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Category, Vendor, Product } from '@prisma/client';

@ObjectType()
export class VendorProduct {
  @Field(() => Number, { nullable: true })
  id?: number;
  @Field (() => String, { nullable: true })
  uuid?: string;
  @Field(() => String, { nullable: true })
  name?: string;
  @Field(() => Number, { nullable: true })
  quantity?: number;
  @Field(() => Number, { nullable: true })
  categoryId?: number;
  @Field(() => Number, { nullable: true })
  vendorId?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => String, { nullable: true })
  category?: Category;
  @Field(() => String, { nullable: true })
  vendor?: Vendor;
  @Field(() => String, { nullable: true })
  product?: Product;
}