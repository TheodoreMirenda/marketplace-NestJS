import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role, Order } from '@prisma/client';

@ObjectType()
export class Product {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => String, { nullable: true })
  images?: string;

  @Field(() => String, { nullable: true })
  price?: string;

  @Field(() => String, { nullable: true })
  orders?: Order[];

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}
