import { Field, InputType } from '@nestjs/graphql';
import { Role, User, Product } from '@prisma/client';
import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class OrderCreateInput {

  @Field(() => String)
  userId: string;

  @Field(() => String)
  vendorId: string;

  @Field(() => String)
  user: User;

  @Field(() => String)
  productIds: string;
}
