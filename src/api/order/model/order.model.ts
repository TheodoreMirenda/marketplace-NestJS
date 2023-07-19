import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { OrderStatus, User, ProductOrder} from '@prisma/client';

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
  @Field(() => String, { nullable: true })
  user?: User;
  @Field(() => String, { nullable: true })
  productOrders?: ProductOrder[];
}