import { ArgsType, Field } from '@nestjs/graphql';

import { VendorProductWhereUniqueInput } from './vendor-product-where-unique.input';

@ArgsType()
export class VendorProductArgs {
  @Field(() => VendorProductWhereUniqueInput)
  where: VendorProductWhereUniqueInput;
}
