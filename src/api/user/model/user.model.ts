import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role, Order } from '@prisma/client';

@ObjectType()
export class User {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  email?: string;

  @Field(() => Role, { nullable: true })
  type?: Role;

  @Field(() => String, { nullable: true })
  firstName?: string;

  @Field(() => String, { nullable: true })
  lastName?: string;

  @Field(() => String, { nullable: true })
  username?: string;

  @Field(() => String, { nullable: true })
  passwordHash?: string;

  @Field(() => String, { nullable: true })
  avatar?: string;

  @Field(() => Order, { nullable: true })
  orders?: Order[];

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

registerEnumType(Role, {
  name: 'Role',
});
