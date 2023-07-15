import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CategoryWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  email: string;
}