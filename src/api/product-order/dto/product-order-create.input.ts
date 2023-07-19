import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { ProductCreateNestedOneWithoutProductOrderInput } from 'src/api/product/dto';
import { OrderCreateNestedOneWithoutProductOrdersInput } from 'src/api/order/dto';
import { ProductOrderWhereUniqueInput } from './product-order-where-unique.input';

@InputType()
export class ProductOrderCreateInput {
  @Field(() => Number, { nullable: true })
  quantity: number;

  @Field(() => ProductCreateNestedOneWithoutProductOrderInput)
  product: ProductCreateNestedOneWithoutProductOrderInput

  @Field(() => OrderCreateNestedOneWithoutProductOrdersInput)
  order: OrderCreateNestedOneWithoutProductOrdersInput
}

@InputType()
export class ProductOrderCreateNestedManyWithoutOrderInput {
  @Field(() => ProductOrderWhereUniqueInput)
  connect: ProductOrderWhereUniqueInput;
}