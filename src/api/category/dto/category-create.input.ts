import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CategoryCreateInput {

  @Field(() => String)
  name: string;
}
