import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role, Order } from '@prisma/client';

@ObjectType()
export class VendorProduct {
  @Field(() => String)
  id: string;

  @Field(() => String)
  vendorId: string;

  @Field(() => String)
  productId: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  quantity: string;

  @Field(() => String)
  createdAt: string;

  @Field(() => String)
  updatedAt: string;
}