import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role, Order, Vendor } from '@prisma/client';

@ObjectType()//this is all the stuff that can be returned from the graphql api
export class User {
  @Field(() => String, { nullable: true })
  id?: string;
  
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
  avatar?: string;

  @Field(() => String, { nullable: true })
  orders?: Order[];

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;

  @Field(() => String, { nullable: true })
  vendor?: Vendor;
}

registerEnumType(Role, {
  name: 'Role',
});
