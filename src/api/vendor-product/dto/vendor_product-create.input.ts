import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class VendorProductCreateInput {

  @Field(() => String)
  vendorId: string;

  @Field(() => String)
  productId: string;

  @Field(() => String)
  price: string;

  @Field(() => String)
  quantity: string;

  @Field(() => String)
  description: string;
}
