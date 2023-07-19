import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

import { IsEmail, MaxLength, MinLength } from 'class-validator';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateInput {
  @Field(() => Role)
  type: Role;

  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(4)
  @MaxLength(60)
  @Field(() => String)
  username: string;

  @MinLength(10)
  @MaxLength(60)
  @Field(() => String)
  password: string;

  @MaxLength(60)
  @Field(() => String)
  firstName: string;

  @MaxLength(60)
  @Field(() => String)
  lastName: string;

  @Field(() => String)
  avatar: string;
}

@InputType()
export class UserCreateNestedOneWithoutVendorInput {
  @Field(() => UserWhereUniqueInput)
  connect: UserWhereUniqueInput;
}

@InputType()
export class UserCreateNestedOneWithoutOrdersInput {
  @Field(() => UserWhereUniqueInput)
  connect: UserWhereUniqueInput;
}