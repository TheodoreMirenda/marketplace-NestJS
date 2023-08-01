import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { UserCreateNestedOneWithoutVendorInput } from 'src/api/user/dto';
import { VendorWhereUniqueInput } from './vendor-where-unique.input';

@InputType()
export class VendorCreateInput {

  @MinLength(4)
  @MaxLength(60)
  @Field(() => String)
  name: string;

  @Field(() => UserCreateNestedOneWithoutVendorInput)
  user: UserCreateNestedOneWithoutVendorInput;
}

@InputType()
export class VendorCreateNestedOneWithoutVendorProductsInput {
  @Field(() => VendorWhereUniqueInput)
  connect: VendorWhereUniqueInput;
}