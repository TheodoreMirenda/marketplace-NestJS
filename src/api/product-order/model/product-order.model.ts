import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Order, Product } from '@prisma/client';


@ObjectType()
export class ProductOrder {
  @Field(() => Number, { nullable: true })
  productId?: number;
  @Field(() => Number, { nullable: true })
  orderId?: number;
  @Field(() => Number, { nullable: true })
  quantity?: number;
  
  @Field(() => String, { nullable: true })
  product?: Product;
  @Field(() => String, { nullable: true })
  order?: Order;
}
