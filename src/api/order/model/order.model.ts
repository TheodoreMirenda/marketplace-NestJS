import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { OrderStatus } from '@prisma/client';
import { User } from 'src/api/user/model/user.model';
import { ProductOrder } from 'src/api/product-order/model/product-order.model'

@ObjectType()
export class Order {
  @Field(() => Number, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  uuid?: string;
  @Field(() => Number, { nullable: true })
  userId?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => OrderStatus, { nullable: true })
  orderStatus?: OrderStatus;
  @Field(() => User, { nullable: true })
  user?: User;
  @Field(() => [ProductOrder], { nullable: true })
  productOrders?: ProductOrder[];
}