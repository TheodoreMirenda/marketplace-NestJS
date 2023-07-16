import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class VendorProductWhereUniqueInput {
  @Field(() => String, { nullable: true })
  uuid?: string;
}
