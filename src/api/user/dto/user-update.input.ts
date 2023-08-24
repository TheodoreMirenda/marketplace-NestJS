import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';
import { IsEmail, IsOptional, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UserUpdateInput {

  @IsOptional()
  @Field(() => Role, { nullable: true })
  type?: Role;

  @IsOptional()
  @IsEmail()
  @Field(() => String, { nullable: true })
  email?: string;

  @IsOptional()
  @MinLength(4)
  @MaxLength(60)
  @Field(() => String, { nullable: true })
  username?: string;

  @IsOptional()
  @MinLength(10)
  @MaxLength(60)
  @Field(() => String, { nullable: true })
  password?: string;

  @IsOptional()
  @MaxLength(60)
  @Field(() => String, { nullable: true })
  firstName?: string;

  @IsOptional()
  @MaxLength(60)
  @Field(() => String, { nullable: true })
  lastName?: string;

  @IsOptional()
  @Field(() => String, { nullable: true })
  avatar?: string;
}
