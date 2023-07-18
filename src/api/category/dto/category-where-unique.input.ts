import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CategoryWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
  
  @Field(() => String, { nullable: true })
  uuid: string;

  @Field(() => String, { nullable: true })
  name: string;
}
