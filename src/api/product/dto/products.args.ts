import { ArgsType, Field } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where.input';

@ArgsType()
export class ProductsArgs {
  @Field(() => ProductWhereInput)
  where?: ProductWhereInput;
}