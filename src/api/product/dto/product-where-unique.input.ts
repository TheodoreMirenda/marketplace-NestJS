import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class ProductWhereUniqueInput {
  @Field(() => Number)
  id: number;
  @Field(() => String, { nullable: true })
  uuid: string;
  @Field(() => Number, { nullable: true })
  vendorProductId: number;
}
