import { ArgsType, Field } from '@nestjs/graphql';
import { ProductWhereUniqueInput } from './product-where-unique.input';

@ArgsType()
export class ProductArgs {
  @Field(() => ProductWhereUniqueInput)
  where?: ProductWhereUniqueInput;
}