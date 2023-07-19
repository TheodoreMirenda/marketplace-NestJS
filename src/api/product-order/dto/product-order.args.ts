import { ArgsType, Field } from '@nestjs/graphql';

import { ProductOrderWhereUniqueInput } from './product-order-where-unique.input';

@ArgsType()
export class ProductOrderArgs {
  @Field(() => ProductOrderWhereUniqueInput)
  where: ProductOrderWhereUniqueInput;
}
