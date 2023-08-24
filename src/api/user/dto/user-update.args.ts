import { ArgsType, Field } from '@nestjs/graphql';

import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateInput } from './user-update.input';

@ArgsType()
export class UserArgs {

  @Field(() => UserWhereUniqueInput)
  where: UserWhereUniqueInput;

  @Field(() => UserUpdateInput)
  data: UserUpdateInput;

}
