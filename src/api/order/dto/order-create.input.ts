import { Field, InputType } from '@nestjs/graphql';
import { ProductOrderCreateNestedManyWithoutOrderInput } from 'src/api/product-order/dto';
import { OrderWhereUniqueInput } from './order-where-unique.input';

@InputType()
export class OrderCreateInput {
  @Field(() => ProductOrderCreateNestedManyWithoutOrderInput)
  productOrders: ProductOrderCreateNestedManyWithoutOrderInput;
}

@InputType()
export class OrderCreateNestedOneWithoutProductOrdersInput {
  @Field(() => OrderWhereUniqueInput)
  connect: OrderWhereUniqueInput;
}