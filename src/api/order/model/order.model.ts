import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { OrderStatus, User, Product} from '@prisma/client';

@ObjectType()
export class Order {
  @Field(() => Number, { nullable: true })
  id?: number;
  @Field(() => String, { nullable: true })
  uuid?: string;
  @Field(() => Number, { nullable: true })
  userId?: number;


  @Field(() => OrderStatus, { nullable: true })
  orderStatus?: OrderStatus;
  // @Field(() => User, { nullable: true })
  // user?: User;
  @Field(() => String, { nullable: true })
  productIds?: string;
  // @Field(() => Product, { nullable: true })
  // products?: Product[];

  @Field(() => Date, { nullable: true })
  createdAt?: Date;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

// registerEnumType(User, {
//   name: 'User',
// });
registerEnumType(OrderStatus, {
  name: 'OrderStatus',
});
