import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class UserWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string;//at least 1 field is required (for typescript)

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email: string;
}
//fetch product, get vendor, etc