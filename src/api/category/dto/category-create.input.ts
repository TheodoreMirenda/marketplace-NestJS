import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class CategoryCreateInput {

  @MinLength(4)
  @MaxLength(60)
  @Field(() => String)
  vendorName: string;

  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(4)
  @MaxLength(60)
  @Field(() => String)
  avatar: string;

  @MinLength(10)
  @MaxLength(60)
  @Field(() => String)
  passwordHash: string;

}
