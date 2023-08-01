import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class OrderWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string;
  @Field(() => Number, { nullable: true })
  id: number;
}