import { ArgsType, Field } from '@nestjs/graphql';

import { VendorWhereUniqueInput } from './vendor-where-unique.input';

@ArgsType()
export class VendorArgs {
  @Field(() => VendorWhereUniqueInput)
  where: VendorWhereUniqueInput;
}
