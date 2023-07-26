import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { ProductCreateNestedOneWithoutProductOrderInput } from 'src/api/product/dto';
import { OrderCreateNestedOneWithoutProductOrdersInput } from 'src/api/order/dto';
import { ProductCreateNestedOneWithoutProductOrdersInput } from 'src/api/product/dto';
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
export class ProductOrderCreateWithoutOrderInput {
  @Field(() => Number, { nullable: true })
  quantity: number;
  @Field(() => ProductCreateNestedOneWithoutProductOrdersInput)
  product: ProductCreateNestedOneWithoutProductOrdersInput;
}
@InputType()  
export class ProductOrderCreateManyOrderInput {
  @Field(() => Number, { nullable: true })
  productId: number;
  @Field(() => Number, { nullable: true })
  quantity: number;
}
@InputType()  
export class ProductOrderCreateManyOrderInputEnvelope {
  @Field(() => [ProductOrderCreateManyOrderInput])
  data: ProductOrderCreateManyOrderInput[];
}
@InputType()
export class ProductOrderCreateNestedManyWithoutOrderInput {
  @Field(() => ProductOrderCreateManyOrderInputEnvelope)
  createMany : ProductOrderCreateManyOrderInputEnvelope;
}