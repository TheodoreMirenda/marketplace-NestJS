import { ArgsType, Field } from '@nestjs/graphql';
import { ProductWhereInput } from './product-where-unique.input';

@ArgsType()
export class ProductArgsOther {
  @Field(() => ProductWhereInput)
  where?: ProductWhereInput;
}