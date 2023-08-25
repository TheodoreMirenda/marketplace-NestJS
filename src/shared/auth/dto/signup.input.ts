import { Field, InputType } from '@nestjs/graphql';

import { IsEmail, IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType()
export class SignUpInput {
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

  @IsOptional()
  @Field(() => String, { nullable: true })
  avatar?: string;
}
