import { InputType, Field } from '@nestjs/graphql';
import { OrderStatus } from '@prisma/client';
import { number } from 'joi';

@InputType()
export class OrderWhereUniqueInput {
  @Field(() => number, { nullable: true })
  uuid?: number;

  @Field(() => number, { nullable: true })
  id?: number;
}
