import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class VendorWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;
  @Field(() => String, { nullable: true })
  uuid: string;
  @Field(() => String, { nullable: true })
  userId: number;
  @Field(() => String, { nullable: true })
  vendorName: string;
}
